import React from 'react';

function Home({ user, setPage, setUser }) {
  const handleLogout = () => {
    setUser(null);
    setPage('login');
  };

  return (
    <div className="home-container">
      <div className="simple-navbar">
        <h1>My App</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      
      <div className="simple-welcome">
        <h1>Welcome To Your Homepage   {user.name}! </h1>
        <p>You're successfully logged in!</p>
        
        
      </div>
    </div>
  );
}

export default Home;
