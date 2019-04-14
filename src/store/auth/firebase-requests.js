import { showNotification } from 'utils';

export default async function FBRequest(firebaseInstance, requestType, ...params) {
  const authRequests = {
    register: 'createUserWithEmailAndPassword',
    signIn: 'signInWithEmailAndPassword',
    signOut: 'signOut',
  };
  
  const currentRequest = authRequests[requestType];
  
  try {
    if (currentRequest) {
      return await firebaseInstance().auth()[currentRequest](...params);
    }
    
    console.error(
      `${ requestType }, is unknown request type. Available requests are: ${ Object.keys(authRequests) }`
    )
  } catch (e) {
    console.error('FireBase: errorBoundary', e);
    
    showNotification({
      title: currentRequest,
      type: 'error',
      message: e.message
    });
    
    throw new Error(e)
  }
};

