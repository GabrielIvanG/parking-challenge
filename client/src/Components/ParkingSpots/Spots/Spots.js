import React from 'react'
import './Spots.css'
import { useSelector } from 'react-redux'

export default function Spots() {

    const parkings = useSelector((business)=> business.business)
    return (
        <div className='spot'>
            
            <img className='spotImg' src='https://via.placeholder.com/210' alt='busIMG' />
            <div className='businessInfoRating'>
                <h2>Place</h2>
                <h3>Rating</h3>
                <h3>{parkings? console.log(parkings): ''}</h3>
            </div>
            <div className='businessInfoAdress'>
                Adress
            </div>
        </div>
    )
}
