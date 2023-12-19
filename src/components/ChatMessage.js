import React from 'react'
import { USER_ICON_LOGO } from '../utils/constants'

const ChatMessage = ({name , message}) => {
  return (
    <div className='flex flex-row gap-2 items-center'>
        <img className='h-5 my-1' src={USER_ICON_LOGO} alt="user icon for chat" />
        <h1 className='font-bold'>{name}</h1>
        <h1>{message}</h1>
    </div>
  )
}

export default ChatMessage;