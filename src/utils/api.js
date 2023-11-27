import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com',
  params: {
    id: '55EWbmkVr8iDNmSyperh9o'
  },
  headers: {
    'X-RapidAPI-Key': '1ec3413504msh1dfcafc2c42e638p16453cjsn90e6b472ab25',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}