import React from 'react'
import './Header.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <div className='header'>

     <div className="header__left">
      <MenuRoundedIcon/>
      <img className='header__logo'
      src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png" alt="Youtube Logo" />
     </div>

    <div className="header__input">
      <input placeholder='Search' type="text"/>
      <SearchRoundedIcon className='header__inputButton'/>
    </div>

    <div className="header__icons">  
      <VideoCallRoundedIcon className='header__icon'/>
      <AppsRoundedIcon className='header__icon'/>
      <NotificationsRoundedIcon className='header__icon'/>
      <Avatar alt="User avatar" src='https://www.dreamworks.com/storage/movies/sinbad-legend-of-the-seven-seas/gallery/sinbad-legend-of-the-seven-seas-gallery-1.jpg'/>
    </div>  

    </div>
  )
}

export default Header
