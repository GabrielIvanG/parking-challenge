import React, {useState} from 'react';
import './ParkingSpots.css'
import findIcon from '../../icons/findIcon.png'
import Spots from './Spots/Spots.js'
const {BACKEND_URL} = process.env



export default function ParkingSpots() {

  const [location, setLocation] = useState([])

  const formSubmit = (e) => {
    alert(location)
  }

    return (
        <>
        <form onSubmit={formSubmit} className='ParkingSpots'>
            <input placeholder='address,neighborhood,city,state or zip...'
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
