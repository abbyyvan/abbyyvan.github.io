import React from 'react';
import { Link } from 'react-router-dom';
import Intro from './intro/Intro'

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      
      <Intro></Intro>
      {/* Link to About Page */}
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}

export default Home;