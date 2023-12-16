import React from 'react'
import { USER_ICON_LOGO } from '../utils/constants';

const VideoCard = ({info}) => {

    const {snippet , statistics} = info;

    const {channelTitle , title , thumbnails } = snippet;

  return (
    <div>
        <div className='w-[280px] m-2 p-2 shadow-lg cursor-pointer h-[330px]'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
        <ul>
            <li className='font-bold'>{title}</li>
            <li className='font-medium py-1 flex'><img className='h-7 px-2 py-1' src={USER_ICON_LOGO} alt="" />  {channelTitle}</li>
            <li className='text-xs'>{statistics.viewCount} views</li>
        </ul>
        </div>
    </div>
  )
}

export default VideoCard