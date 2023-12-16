import data from "../utils/CommentsData.json";

import React from 'react'
import CommentsList from "./CommentsList";

const CommentsContainer = () => {

    console.log(data);
  return (
    <div className="m-5 p-5">
        <h1 className="text-2xl font-bold">Comments :</h1>
        <CommentsList comments={data} />
    </div>
  )
}

export default CommentsContainer;