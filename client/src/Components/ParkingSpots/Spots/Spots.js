import React from 'react'
import './Spots.css'


export default function Spots({parkings}) {

    return (
        <div className='spot'>
            
            <img className='spotImg' src={parkings.image_url} alt='busIMG' />
            <div className='businessInfoRating'>
                <h2>{parkings.name}</h2>
                <h3>{parkings.rating}</h3>
                <h3>{parkings.score}</h3>
            </div>
            <div className='businessInfoAdress'>
                Adress
                <ul className='addressInfo'>
                {parkings.address &&
						parkings.address.map((parking,idx) => (
							<li key={idx}> {parking} </li>
						))}
                </ul>
            </div>
        </div>
    )
}
