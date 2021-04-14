import axios from 'axios';
import API_KEY from './apiKey';
// axios.defaults.baseURL = 'https://pixabay.com';
const fetchImages = ({ searchQuery, currentPage }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits);
};

export default { fetchImages };
