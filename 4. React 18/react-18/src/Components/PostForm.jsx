import React, { useState } from "react";

const PostForm = () => {
  const [uid, setUid] = useState("");
  const [initialTitle, setTitle] = useState("");
  const [initialBody, setBody] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: initialTitle,
        body: initialBody,
        userId: uid,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          name="userid"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          placeholder="User ID"
        />
      </div>
      <div>
        <input
          type="text"
          name="title"
          value={initialTitle}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </div>
      <div>
        <input
          type="text"
          name="body"
          value={initialBody}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
