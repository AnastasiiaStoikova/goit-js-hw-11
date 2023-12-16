import axios from 'axios';

export async function fetchHits(query = '', page = '') {
  const URL = 'https://pixabay.com/api/?';
  const params = new URLSearchParams({
    key: '26611914-a9246a3e4a5a9ed73e2385457',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 40,
  });
  return await axios.get(`${URL}&${params}`).then(response => {
    return response.data;
  });
}