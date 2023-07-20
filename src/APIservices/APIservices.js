import axios from 'axios';

const API_KEY = '4959719-2280f709437ef1ad4f05c2184';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  per_page: 12,
  image_type: 'photo',
  key: API_KEY,
  lang: 'en',
  safesearch: true,
  orientation: 'horizontal',
};

export const fetchImage = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  return data;
};
