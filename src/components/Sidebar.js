import React from "react";
import { useSelector } from "react-redux";
import {
  SHORTS_LOGO,
  SUB_LOGO,
  UTUBE_HOME_LOGO,
  YOU_LOGO,
} from "../utils/constants";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;


  return (
    <div>
      <div className="m-3 px-2 w-40 bg-slate-200 rounded-lg overflow-y-scroll h-screen ">
        <ul className=" py-1 text-xl">
          <Link to={"/"}>
          <li className="p-1 hover:bg-slate-400 rounded-lg">Home</li>
          </Link>
          <li className="p-1 hover:bg-slate-400 rounded-lg">Shorts</li>
          <li className="p-1 hover:bg-slate-400 rounded-lg">Subscriptions</li>
        </ul>
        <ul className=" text-xl py-1 border-t-4 border-t-slate-800">
          <li className="p-1 hover:bg-slate-400 rounded-lg">You</li>
          <li className="p-1 hover:bg-slate-400 rounded-lg">History</li>
        </ul>
        <h1 className="my-2 text-xl font-bold border-t-4 border-t-slate-800">
          Explore
        </h1>
        <ul className=" py-1 text-lg">
          <li className="p-1 hover:bg-slate-400 rounded-lg">Trending</li>
          <li className="p-1 hover:bg-slate-400 rounded-lg">Shopping</li>
          <li className="p-1 hover:bg-slate-400 rounded-lg">Music</li>
          <li className="p-1 hover:bg-slate-400 rounded-lg">movies</li>
          <li className="p-1 hover:bg-slate-400 rounded-lg">Live</li>
          <li className="p-1 hover:bg-slate-400 rounded-lg">Gaming</li>
          <li className="p-1 hover:bg-slate-400 rounded-lg">News</li>
          <li className="p-1 hover:bg-slate-400 rounded-lg">Sports</li>
          <li className="p-1 hover:bg-slate-400 rounded-lg">Learning</li>
          <li className="p-1 hover:bg-slate-400 rounded-lg">Fashion</li>
          <li className="p-1 hover:bg-slate-400 rounded-lg">Beauty</li>
          <li className="p-1 hover:bg-slate-400 rounded-lg">Podcasts</li>
        </ul>
        <h1 className="my-2 text-lg font-bold border-t-4 border-t-slate-800">
          More from YouTube
        </h1>
        <ul>
          <li className="p-1 hover:bg-slate-400 rounded-lg">Youtube Premium</li>
          <li className="p-1 hover:bg-slate-400 rounded-lg">Youtube Music</li>
          <li className="p-1 hover:bg-slate-400 rounded-lg">Youtube Kids</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
