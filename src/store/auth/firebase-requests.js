import { showNotification } from 'utils';

export default async function FBRequest(firebaseInstance, requestType, ...params) {
  const authRequests = {
    register: 'createUserWithEmailAndPassword',
    signIn: 'signInWithEmailAndPassword',
    signOut: 'signOut',
    updateProfile: 'updateProfile'
  };
  
  const currentRequest = authRequests[requestType];
  
  try {
    if (currentRequest) {
      const baseRequestPart = firebaseInstance().auth();
      
      return currentRequest !== authRequests['updateProfile']
        ? await baseRequestPart[currentRequest](...params)
        : await baseRequestPart.currentUser[currentRequest]({ ...params[0] });
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
    
    throw new Error(` at ${ requestType } method: ${ e }`)
  }
};

