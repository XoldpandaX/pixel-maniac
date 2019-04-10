const DISABLE_CORS_URI = 'https://cors-anywhere.herokuapp.com/';

const IMAGE_SERVER_URI = 'https://wall.alphacoders.com/api2.0/get.php';
const IMAGE_SERVER_KEY = 'f02ce61569be217487b9c7fafceae175';

const IMAGE_SERVER_ENDPOINT = `${ DISABLE_CORS_URI }${ IMAGE_SERVER_URI }`;

const NOTIFICATION_TIMEOUT = 5000;

// firebase
const API_KEY = 'AIzaSyAVHTIAJIUFreezVJTWZRLBFu-DDMckcgs';
const AUTH_DOMAIN = 'pixel-maniac.firebaseapp.com';
const DATABASE_URL = 'https://pixel-maniac.firebaseio.com';
const PROJECT_ID = 'pixel-maniac';
const STORAGE_BUCKET = 'pixel-maniac.appspot.com';
const MESSAGING_SENDER_ID = '758836201272';

export {
  NOTIFICATION_TIMEOUT,
  IMAGE_SERVER_KEY,
  DISABLE_CORS_URI,
  IMAGE_SERVER_URI,
  IMAGE_SERVER_ENDPOINT,
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID
}
