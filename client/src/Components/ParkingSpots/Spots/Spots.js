import React from 'react'
import './Spots.css'
import noImg from '../../../img/noImageAvailable.png'


export default function Spots({parkings}) {

    return (
        <div className='spot'>
            <div className='imgContainer'>
            <img className='spotImg' src={
                                        parkings.image_url
                                            ? parkings.image_url
                                            : noImg
                                         } alt={'image of ' + parkings.name}
            />
            </div>
            <div className='businessInfoRating'>
                <h1>{parkings.name}</h1>
                <div className='ratingColumns'>
                    <div className='leftColumn'>
                        <div className='scoreContainer'>
                            <h3>{parkings.score}</h3>
                            <hr className='separator' />
                            <h4>SCORE</h4>
                        </div>
                    </div>
                    <div className='rightColumn'>
                        <h2>{parkings.rating}</h2>
                        <h3>{parkings.reviews}</h3>
                    </div>
                </div>
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
