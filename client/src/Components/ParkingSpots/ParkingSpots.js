import React from 'react';
import './ParkingSpots.css'
import findIcon from '../../icons/findIcon.png'
import Spots from './Spots/Spots.js'

var axios = require('axios');
var data = '';

var config = {
  method: 'get',
  url: 'https://api.yelp.com/v3/businesses/search?term=parking-lot&location=90001',
  headers: { 
    'Authorization': 'Bearer 8wWR72TAtg6J5IxB35oKOXRjpbAN717dVWGY8qlRPM9fnao7wYo0JEsUjcl20vwJzKRHz5XSicGywNreXZZeZ1k2LiOwISf-hVCCZhpHaQOc2SEIDtun_tRl-dv1YHYx'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});



export default function ParkingSpots() {
    return (
        <>
        <div className='ParkingSpots'>
            <input placeholder='address,neighborhood,city,state or zip...'></input>
            <img src={findIcon} id='findButton' alt='findIcon' />
        </div>
        <Spots />
        </>
    )
}
