import React from 'react'
import Avatar from '@mui/material/Avatar';
import './VideoCard.css'

function VideoCard({image, title, channel, views, timestamp, channelImage}) {
  return (
    <div className='videoCard'>
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
            <Avatar className='videoCard__avatar' alt={channel} src={channelImage}/>
            <div className="videoCard__text">
                <h3>{title}</h3>
                <p>{channel}</p>
                <p>{views} . {timestamp}</p>
            </div>
      </div>
    </div>
  )
}

export default VideoCard
