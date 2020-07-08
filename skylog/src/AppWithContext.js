import React, { useState } from 'react';
import { SkyLogContext } from './SkyLogContext';
import { apiBaseUrl } from "./config";
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

  const loadJumps = async()=> {
    const response = await fetch(`${apiBaseUrl}/jumps`, {
      headers: { Authorization: `Bearer ${authToken}`}
    });
    if (response.ok) {
      const jumps = await response.json();
      setJumps(jumps);
  }
 }

  return (
    <SkyLogContext.Provider value={{ authToken, needLogin, login, jumps, loadJumps}} >
      <App />
    </SkyLogContext.Provider>
  );
};

export default AppWithContext;
