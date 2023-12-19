import React from "react";
import { DISLIKE_ICON, LIKE_ICON } from "../utils/constants";

const Comment = ({ data }) => {
  const { textDisplay, authorProfileImageUrl, authorDisplayName, likeCount } =
    data?.snippet?.topLevelComment?.snippet;

  const { totalReplyCount } = data;

  return (
    <div className="">
      <div className="flex gap-2">
        <div className="my-2 mx-1 p-2">
          <img
            className="rounded-full"
            src={authorProfileImageUrl}
            alt="comments channel logo"
          />
        </div>
        <div className="my-3 bg-gray-200 rounded-xl w-[55rem] p-1" >
          <h1 className="font-bold ">{authorDisplayName}</h1>
          <h1>{textDisplay}</h1>
        </div>
      </div>
      <div className="flex mx-[5rem] cursor-pointer">
        <img className="h-6" src={LIKE_ICON} alt="" />
        <h1>{likeCount}</h1>
        <img className="h-6 mx-3" src={DISLIKE_ICON} alt="" />
        <h1 className="mx-3 text-sm">Reply</h1>
      </div>
      <div className="mx-[8rem] my-1 bg-blue-700 w-16 text-center text-white p-1 rounded-xl cursor-pointer">
        <h1>{totalReplyCount} Reply</h1>
      </div>
    </div>
  );
};

export default Comment;
