const DISABLE_CORS_URI = 'https://cors-anywhere.herokuapp.com/';

const IMAGE_SERVER_URI = 'https://wall.alphacoders.com/api2.0/get.php';

const IMAGE_SERVER_ENDPOINT = `${ DISABLE_CORS_URI }${ IMAGE_SERVER_URI }`;

const NOTIFICATION_TIMEOUT = 4000;

// firebase
const FIREBASE_CONFIG = {
  authDomain: 'pixel-maniac.firebaseapp.com',
  databaseURL: 'https://pixel-maniac.firebaseio.com',
  projectId: 'pixel-maniac',
  storageBucket: 'pixel-maniac.appspot.com',
  messagingSenderId: '758836201272'
};

export {
  NOTIFICATION_TIMEOUT,
  DISABLE_CORS_URI,
  IMAGE_SERVER_URI,
  IMAGE_SERVER_ENDPOINT,
  FIREBASE_CONFIG
}
