import React from 'react'
import data from "../utils/CommentsData.json";
import Comment from './Comment';


const CommentsList = ({comments}) => {
  return comments.map((comment) => (
      <div>
   <Comment key={data.id} data={comment} />
<div className='pl-5 border border-l-black ml-2 mb-3'>
<Comment key={data.id} data={comment} />
</div>
   </div>
  ))
}

export default CommentsList