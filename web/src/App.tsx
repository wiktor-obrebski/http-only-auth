import React, { useState } from 'react';
import axios from 'axios';

// const apiBaseUrl = 'http://local.loc:8086';
const apiBaseUrl = 'https://api.test.loc:4000';

const fetchOptions = {
  credentials: 'include',
  headers: {
    'X-Auth': ''
  }
} as RequestInit;

function App() {
  const [isAxios, setIsAxios] = useState(false);

  const toggleAxios = () => {
    setIsAxios(!isAxios);
  };

  const auth = () => {
    fetch(`${apiBaseUrl}/authorize`, {
      ...fetchOptions,
      method: 'post',
    });
  };

  const getPosts = () => {
    if (!isAxios) {
      fetch(`${apiBaseUrl}/posts`, {
        ...fetchOptions,
      });

      return;
    }

    axios.get(`${apiBaseUrl}/posts`, {
      withCredentials: true,
    });
  };

  const logout = () => {
    fetch(`${apiBaseUrl}/logout`, {
      ...fetchOptions,
      method: 'post',

    });
  };

  return (
    <div>
      <div>
        <input type='checkbox' onChange={toggleAxios} /> Axios
      </div>

      <div className='mt-10'>
        <button onClick={auth}>Auth</button>
      </div>

      <div className='mt-10'>
        <button onClick={getPosts}>Get posts</button>
      </div>

      <div className='mt-10'>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default App;
