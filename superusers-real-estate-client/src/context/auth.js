import React, { useReducer, createContext } from 'react';
import jwtDecode from 'jwt-decode';

// ***********
const initialState = {
  user: null,
  verificationCode: null
};

if (localStorage.getItem('jwtToken')) {
  const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('jwtToken');
  } else {
    initialState.user = decodedToken;
  }
}

const AuthContext = createContext({
  user: null,
  verificationCode: null,
  login: userData => {},
  logout: () => {},
  verify: code => {}
});

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        verificationCode: null
      };

    case 'VERIFICATION':
      return {
        ...state,
        verificationCode: action.payload
      };

    case 'LOGOUT':
      return {
        ...state,
        user: null
      };

    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(userData) {
    dispatch({
      type: 'LOGIN',
      payload: userData
    });
    localStorage.setItem('jwtToken', userData.token);
  }

  const logout = () => {
    localStorage.removeItem('jwtToken');
    dispatch({
      type: 'LOGOUT'
    });
  };

  function verify(verificationCode) {
    dispatch({
      type: 'VERIFICATION',
      payload: verificationCode
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        verificationCode: state.verificationCode,
        login,
        logout,
        verify
      }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
