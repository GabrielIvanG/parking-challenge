import React, {useState} from 'react';
import './ParkingSpots.css'
import findIcon from '../../icons/findIcon.png'
import Spots from './Spots/Spots.js'
import {getBusiness} from '../../redux/actions/actions.js'



export default function ParkingSpots() {

  const [location, setLocation] = useState([])

  getBusiness(location)
  const submit = (e) => {
    e.preventDefault()
    getBusiness(location)
    console.log(location)
    
  }



  return (
      <>
      <form onSubmit={submit} className='ParkingSpots'>
          <input id='locationInput' placeholder='address,neighborhood,city,state or zip...'
                onChange={(e)=> {setLocation(e.target.value)}}
          />
          <button>
            <img src={findIcon} id='findButton' alt='findIcon' />
          </button>
      </form>
      <Spots />
      </>
  )
}
