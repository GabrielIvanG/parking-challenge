import React, {useState } from 'react';
import './ParkingSpots.css'
import findIcon from '../../icons/findIcon.png'
import Spots from './Spots/Spots.js'
import {getBusiness} from '../../redux/actions/actions.js'
import { useDispatch, useSelector } from "react-redux"

// const axios = require('axios').default



export default function ParkingSpots() {

  const [location, setLocation] = useState('')

  // const getBus = async (location) => {
  //   const {data} = await axios.get(
  //     `${process.env.REACT_APP_BACKEND_URL}parkings?location=${location}`
  //   )
    
  //   let newData = data.response.parkings
  //   console.log(newData)
  // }

  // getBus('NY')

  const dispatch = useDispatch()

  const submit = (e) => {
    e.preventDefault();

    if (location){
      dispatch(getBusiness(location))
    }else {
      alert('Insert a location')
    }
    
  }


  const results = useSelector((business) => business)
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
        {console.log(results)}
        <Spots />
      </div>
      </>
  )
}


