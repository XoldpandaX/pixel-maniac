import axios from 'axios';

import { showNotification, objKeysToSnakeCase } from 'utils';
import { IMAGE_SERVER_ENDPOINT, IMAGE_SERVER_KEY } from 'config';

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
    
    showNotification({
      title: 'Error',
      message: currentError === expectedError ? `wrong api key` : currentError,
      type: 'error'
    });
  }
  return response;
},(error) => {
  showNotification({
    title: 'Error',
    message: error,
    type: 'error'
  });
  
  return Promise.reject(error);
});

requestImage.interceptors.request.use((config) => ({
  ...config,
  params: objKeysToSnakeCase(config.params)
}), (error) => {
  return Promise.reject(error);
});

export default requestImage;
