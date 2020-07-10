import React, { useState } from 'react';
import { SkyLogContext } from './SkyLogContext';
import { apiBaseUrl } from "./config";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './App';

const AppWithContext = () => {
  const localStorageToken = localStorage.getItem('state-skylog-app-token');
  const [authToken, setAuthToken] = useState(localStorageToken);
  const [needLogin, setNeedLogin] = useState(!localStorageToken);
  const [jumps, setJumps]=useState([]);

  const login = token => {
    window.localStorage.setItem('state-skylog-app-token', token);
    setAuthToken(token);
    setNeedLogin(false);
  };
  const loginOut = () => {
    window.localStorage.clear();
    setAuthToken(null);
    setNeedLogin(true);
  };

  const loadJumps = async()=> {
    const response = await fetch(`${apiBaseUrl}/jumps`, {
      headers: { Authorization: `Bearer ${authToken}`}
    });
    if (response.ok) {
      const jumps = await response.json();
      setJumps(jumps);
  }
 }
 const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

  return (
    <SkyLogContext.Provider value={{ authToken, needLogin, login, loginOut, jumps, loadJumps}} >
     <AlertProvider template={AlertTemplate} {...options}>
       <App />
     </AlertProvider>
    </SkyLogContext.Provider>
  );
};

export default AppWithContext;