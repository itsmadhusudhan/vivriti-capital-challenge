import React from 'react';

const Navbar=(props)=>{
  return(
    <nav className="navbar">
    <a href="/" className="navbar__item"><h1>Vivitri Capital</h1></a>
    <a href="/" className="navbar__item">Home</a>
    <div className="navbar__end">
    <a href="/" className="navbar__item"><i className="fas fa-shopping-cart"></i></a>        
    <a href="/" className="navbar__item"><i className="fas fa-search"></i></a>        
    </div>
  </nav>
  )
}

export default Navbar;