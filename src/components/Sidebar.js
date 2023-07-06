import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded'
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

function Sidebar() {
  return (
    <div className='sidebar'>

      <SidebarRow selected Icon={HomeRoundedIcon} title='Home'/>
      <SidebarRow Icon={WhatshotRoundedIcon} title='Trending'/>
      <SidebarRow Icon={SubscriptionsRoundedIcon} title='Subscriptions'/>

      <hr/>

      <SidebarRow Icon={VideoLibraryRoundedIcon} title='Library'/>
      <SidebarRow Icon={HistoryRoundedIcon} title='History'/>
      <SidebarRow Icon={OndemandVideoRoundedIcon} title='Your Videos'/>
      <SidebarRow Icon={WatchLaterRoundedIcon} title='Watch Later'/>
      <SidebarRow Icon={ThumbUpAltRoundedIcon} title='Liked Videos'/>
      <SidebarRow Icon={ExpandMoreRoundedIcon} title='Show More'/>

      <hr/>

    </div>
  )
}

export default Sidebar
