export const getRegisterLoadingStatus = ({ auth }) => auth.additional.isRegisterLoading;
export const getLoginLoadingStatus = ({ auth }) => auth.additional.isLoginLoading;

// firebase auth
export const getUserData = ({ firebase }) => !firebase.auth.isEmpty && firebase.auth;

