import React from 'react'
import './Spots.css'
import noImg from '../../../img/noImageAvailable.png'
import CustomizedRatings from './Rating/Rating.js'
import RateReviewIcon from '@material-ui/icons/RateReview';
import {v4 as unicID} from 'uuid';


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
                <a href={parkings.url} target="_blank" rel="noreferrer">
                    <h1>{parkings.name}</h1>
                </a>
                <div className='ratingColumns'>
                    <div className='leftColumn'>
                        <div className='scoreContainer'>
                            <h3>{String(parkings.score).slice(0, 4)}</h3>
                            <hr className='separator' />
                            <h4>SCORE</h4>
                        </div>
                    </div>
                    <div className='rightColumn'>
                        <div className='ratingComponent'>
                        <CustomizedRatings rating={parkings.rating} />
                        </div>
                        <div className='reviewContainer'>
                            <h3>{parkings.reviews}</h3>
                            <RateReviewIcon />
                            <h4>reviews</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='businessInfoAdress'>
                Adress
                <ul className='addressInfo'>
                {parkings.address &&
						parkings.address.map((parking) => (
							<li key={unicID()}> {parking} </li>
						))}
                </ul>
            </div>
        </div>
    )
}
