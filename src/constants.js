const regExp = {
  verifyUserName: /^.*[^A-Za-z].*$/,
  verifyEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  verifyPassword: /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*.,_])/
};

const routes = {

};

const authorizationErrors = {
  username: 'Min - 4 symbols, no num, only latin abc',
  email: 'Email is invalid or already taken',
  password: 'Pass at least 6 characters including number, one spec symbol',
  passwordRepeat: 'Passwords are not equal',
};

export {
  authorizationErrors,
  regExp,
  routes
}
