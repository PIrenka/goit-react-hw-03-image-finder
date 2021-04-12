import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com';
const API_KEY = '20341513-7d48bbe81977c2377736c4eb0';
const fetchImages = () => {
  return axios
    .get(
      `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits);
};

export default { fetchImages };
