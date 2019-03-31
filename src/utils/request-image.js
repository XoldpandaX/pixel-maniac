import axios from 'axios';
import { notification } from '../utils';

import { IMAGE_SERVER_ENDPOINT, IMAGE_SERVER_KEY } from '../config';

const requestImage = axios.create({
  baseURL: IMAGE_SERVER_ENDPOINT,
  params: {
    auth: IMAGE_SERVER_KEY
  }
});

requestImage.interceptors.response.use((response) => {
  if (!response.data.success) {
    const currentError = response.data.error;
    const expectedError = 'invalid_auth';
    
    notification({
      title: 'Error',
      message: currentError === expectedError ? `wrong api key` : currentError,
      type: 'error'
    });
  }
  return response;
},(error) => {
  notification({
    title: 'Error',
    message: error,
    type: 'error'
  });
  
  return Promise.reject(error);
});

export default requestImage;
