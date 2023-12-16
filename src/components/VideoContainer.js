import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard  from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    await fetch(YOUTUBE_API).then((response) =>
      response.json().then((data) => {
        setVideos(data.items);
      })
    );
  };

  return videos.length === 0 ? 
  (<Shimmer />) 
  : (
    <div className="flex flex-wrap m-3">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
