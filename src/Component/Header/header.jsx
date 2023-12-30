import React from 'react'
import {BrowserRouter, Routes , Route, NavLink}  from 'react-router-dom';
import './header.css'
import imdbLogo from './Imdb-logo.png'; // Adjust the path
import { Search } from 'react-router-dom';
import { useState } from 'react';
export const Header = () => {
  const {query , setQuery} = useState()
  return (
    <div className='header'>

<NavLink to='/'  className='header_link'><img  className='header_icon' src={imdbLogo} /> </NavLink>
<NavLink to='movies/popular'className='header_link' > Popular </NavLink>
<NavLink to='movies/Top_Rated' className='header_link'> Top Rated </NavLink>
<NavLink to='movies/Upcoming' className='header_link'> Upcoming </NavLink>
<NavLink to='/search'> <i className='fa fa-search searchQ'>  </i></NavLink>

    </div>
  )
}
export default Header;