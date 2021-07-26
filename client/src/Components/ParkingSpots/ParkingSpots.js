import React, {useState } from 'react';
import './ParkingSpots.css'
import findIcon from '../../icons/findIcon.png'
import Spots from './Spots/Spots.js'
import {getBusiness} from '../../redux/actions/actions.js'
import { useDispatch, useSelector } from "react-redux"

export default function ParkingSpots() {

  const [location, setLocation] = useState('')


  const dispatch = useDispatch()

  const submit = (e) => {
    e.preventDefault();

    if (location){
      dispatch(getBusiness(location))
    }else {
      alert('Insert a valid location')
    }
    
  }
  

  const results = useSelector((business) => business.business)
  return (
      <>
      <form onSubmit={submit} className='ParkingSpots' >
          <input id='locationInput' placeholder='address,neighborhood,city,state or zip...'
                onChange={(e)=> {setLocation(e.target.value)}}
          />
          <button>
            <img src={findIcon} id='findButton' alt='findIcon' />
          </button>
      </form>
      <div className='parkingContainer'>
        {results.map( (business , idx) => <Spots key={idx} parkings={business} />)}
      </div>
      </>
  )
}


