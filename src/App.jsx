import React, { useState, useEffect } from 'react';
// import WebPlayback from './WebPlayback'
// import Login from './Login'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState('');

  // useEffect(() => {

  //   async function getToken() {
  //     const response = await fetch('/auth/token');
  //     const json = await response.json();
  //     setToken(json.access_token);
  //   }

  //   getToken();

  // }, []);

  return (
    // <>
    //     { (token === '') ? <Login/> : <WebPlayback token={token} /> }
    // </>
    <div className="App">
    <h1>Updated</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
