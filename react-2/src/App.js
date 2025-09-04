import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import './App.css';

function App() {
  const [page, setPage] = useState('login');
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {page === 'login' && <Login setPage={setPage} setUser={setUser} />}
      {page === 'register' && <Register setPage={setPage} />}
      {page === 'home' && <Home user={user} setPage={setPage} setUser={setUser} />}
    </div>
  );
}

export default App;
