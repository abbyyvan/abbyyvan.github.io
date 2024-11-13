import React from 'react'
import './topbar.css'
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='logo-nav'>
        <div className='left-nav'>A</div>
        <div className='left-nav'>B</div>
        <div className='left-nav'>B</div>
        <div className='left-nav'>Y</div>
        </div>
        
        <div className='right-nav'>
             <a href="/">Home</a>
            <a href="#/portfolio">Portfolio</a>
            <a href="#/contact">Contact</a>
            <a href="#/about">About</a>
        </div>
       
    </div>
   
    
  )
}
