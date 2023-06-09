import React, { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        <h2>
          {posts.map((post) => (
            <li id={post.id}>{post.title}</li>
          ))}
        </h2>
      </ul>
    </div>
  );
};

export default PostList;
