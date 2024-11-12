import React from 'react';

import Intro from '../components/intro/Intro'
import Topbar from '../components/Topbar/Topbar';

function Home() {
  return (
    <div>
      <div className="section1">
        <Topbar></Topbar>
      </div>
      
      <Intro></Intro>
     
    </div>
  );
}

export default Home;