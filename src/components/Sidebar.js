import React from 'react'
import { useSelector } from 'react-redux'
import { SHORTS_LOGO, SUB_LOGO, UTUBE_HOME_LOGO, YOU_LOGO } from '../utils/constants';
import { Link } from 'react-router-dom';

const Sidebar = () => {

const isMenuOpen = useSelector(store => store.app.isMenuOpen);

if(!isMenuOpen) return null;

  return (
    <div>
    <div className='m-3 px-4 w-40'>
       <div className='flex flex-col items-center leading-3 ease-in-out'>
        <Link to={"/"}>
        <img className='h-14 cursor-pointer' src={UTUBE_HOME_LOGO} alt="youtube home logo" />
        </Link>
        <p>Home</p>
       </div>
       <div className='flex flex-col items-center my-5'>
        <img className='h-10' src={SHORTS_LOGO} alt="shorts logo" />
        <p>Shorts</p>
       </div>
       <div className='flex flex-col items-center my-5'>
        <img className='h-8' src={SUB_LOGO} alt="subscription logo" />
        <p>Subscriptions</p>
       </div>
       <div className='flex flex-col items-center my-5'>
        <img className='h-8' src={YOU_LOGO} alt="" />
        <p>You</p>
       </div>
        <h1 className='my-2 text-xl font-bold border-t-4 border-t-slate-800'>Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>movies</li>
                <li>Live</li>
            </ul>
        <h1 className='my-2 text-lg font-bold border-t-4 border-t-slate-800'>More from YouTube</h1>
        <ul>
            <li>Youtube Premium</li>
            <li>Youtube Music</li>
            <li>Youtube Kids</li>
        </ul>
    </div>
    </div>
  )
}

export default Sidebar