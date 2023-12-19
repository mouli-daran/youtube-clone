import React, { useEffect, useState } from "react";
import {
  DOTS_MENU,
  HAM_LOGO,
  SEARCH_LOGO,
  USER_LOGO,
  UTUBE_LOGO,
  UTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResult } from "../utils/searchSlice";
import {closeOptions} from "../utils/menuSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([1]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const handleMenuToggler = () => {
    dispatch(toggleMenu());
  };


const isOptionOpen = useSelector((state) => state.menu.isOptionOpen);
  const handleOptionToggler = () => {
    dispatch(closeOptions());
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    console.log("Api call - ", searchQuery);
try {
  const response = await fetch(UTUBE_SEARCH_API + searchQuery);
  if(response.ok) {
    const data = await response.json();
    setSuggestions(data[1]);

    dispatch(
      cacheResult({
        [searchQuery] : data[1],
      })
    )
  }
  else {
    console.log("Error in Fetch API info");
  }
} catch (error) {
  console.error("Fetch Error" , error);
}
  };


  return (
    <div className="grid grid-flow-col shadow-lg"> 
      <div className=" flex col-span-1 m-1 py-1 px-3">
        <img
          src={HAM_LOGO}
          alt="menu-logo"
          className="h-14 my-3 cursor-pointer"
          onClick={() => {
            handleMenuToggler();
          }}
        />
        <a href="/">
          <img
            src={UTUBE_LOGO}
            alt="youtube-logo"
            className="h-20 cursor-pointer"
          />
        </a>
      </div>

      <div className=" flex col-span-10 items-center ml-12 ">
        <input
          type="text"
          className="border-black h-10 w-4/6 bg-slate-100 rounded-l-full px-3"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}  
        />
        <img
          src={SEARCH_LOGO}
          className="h-10 bg-slate-400 px-3 py-2 rounded-r-full cursor-pointer"
          alt=""
        />
        {showSuggestions && (
          <div className="absolute top-16 bg-white w-[41rem] mx-2 px-2 shadow-lg rounded-lg my-2 ">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="hover:bg-slate-200 rounded-lg py-1 flex">
                  {" "}
                  <img className="h-6 px-2 py-1 " src={SEARCH_LOGO} alt="" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className=" flex col-span-1 items-center gap-4">
        <div>
        <img src={DOTS_MENU} alt="" className="h-9 cursor-pointer" onClick={() => {handleOptionToggler()}} />
        {isOptionOpen && ( 
        <div className="absolute right-48 border border-black bg-white m-2 p-2 text-lg cursor-pointer rounded-lg">
          <h1 className="hover:bg-slate-100 p-1 rounded-lg">Your data in Youtube</h1>
          <h1 className="hover:bg-slate-100 p-1 rounded-lg">Appearance: Device theme</h1>
          <h1 className="hover:bg-slate-100 p-1 rounded-lg">Language: English</h1>
          <h1 className="hover:bg-slate-100 p-1 rounded-lg">Restricted Mode: off</h1>
          <h1 className="hover:bg-slate-100 p-1 rounded-lg">Location: India</h1>
          <h1 className="hover:bg-slate-100 p-1 rounded-lg">Keyboard Shortcuts</h1>
          <h1 className="hover:bg-slate-100 p-1 rounded-lg">Help</h1>
          <h1 className="hover:bg-slate-100 p-1 rounded-lg">Send Feedback</h1>
        </div>
        )}
        </div>
        <div className="flex gap-1 border border-gray-700 p-1 rounded-2xl ">
        <img src={USER_LOGO} alt="" className="h-6 cursor-pointer" />
        <h1 className="text-blue-800">Sign In</h1>     
        </div>       
      </div>
    </div>
  );
};

export default Header;
