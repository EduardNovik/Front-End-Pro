import React, { useState } from 'react';
import './postsStyle.css'

const Posts = (props: any) => {

  function removeElement(id: any) {
    const newPosts = props.postsList.posts.filter((elem:any) => elem.id !== id);
    // console.log(newPosts);
    props.editPost.setPost(newPosts);
  }

  return (
    <div className="postListDiv" >
      <h2>{props.postData.name}</h2>

      {props.postsList.posts.map((item:any) => {
        return (
          <div className="postDiv" key = {item.id}>
            <div>
              <h3>
                {item.id}. {item.title}
              </h3>
              <p>{item.body}</p>
            </div>

            <div>
              <button onClick={() => removeElement(item.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

 

// const list = [
//     { id: "1", title: "JavaScript", body: "Description" },
//     { id: "2", title: "Phyton", body: "Description" },
//     { id: "3", title: "Java", body: "Description" },
//     { id: "4", title: "C++", body: "Description" },
// ];