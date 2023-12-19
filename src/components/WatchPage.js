import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {


  const dispatch = useDispatch();
const [searchParams] = useSearchParams();
console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
    <div className="m-2 p-4 flex w-full">
      <div>
      <iframe
        width="1000"
        height="550"
        src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        ></iframe>
      </div>
      <div className="w-full">
        <LiveChat />
      </div>
        </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
