import React, { useContext } from 'react';
import { ContextApp } from './contextapi/ContextApp';
import Spinner from './Spinner';
const Cards = () => {
  const{post,loader} = useContext(ContextApp);
  return (
    <div>
      {
        loader ?(<Spinner/>):(
        post?.map((postItem)=>{
          return <div>
            <div>
              <h2>{postItem.title}</h2>
              <p>{postItem.content}</p>
            </div>
            <div>
              <p>by {postItem.author} on <span>{postItem.category}</span></p>
              <p>on <span>{postItem.date}</span></p>
            </div>
            <hr />
          </div>
          })
        )
      }
    </div>
  );
}

export default Cards;
