const axios = require('axios');
const {YELP_BASE_URL, YELP_API_KEY , TRUEWAYGEOCODING_BASE_URL, X_RAPIDAPI_KEY , X_RAPIDAPI_HOST } = process.env;


const makeRequest = (location) => {
	const config = {
		method: 'get',
		baseURL: `${YELP_BASE_URL}?location=${location}&categories=parking`,
		headers: {Authorization: `Bearer ${YELP_API_KEY}`},
	};

	return axios(config);
};

const getGeocode = (adressToDecode) => {
	const config = {
		method: 'GET',
		url: TRUEWAYGEOCODING_BASE_URL,
		params: {address: adressToDecode , language: 'en'},
		headers: {
		  'x-rapidapi-key': X_RAPIDAPI_KEY,
		  'x-rapidapi-host': X_RAPIDAPI_HOST
		}
	};

	return axios(config)
}

module.exports = {
	makeRequest,
	getGeocode,
};
