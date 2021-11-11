import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Loading from "./Loading";

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  const newPosts = async () => {
    try {
      const userPosts = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(userPosts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newPosts();
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <TextField
        style={{
          padding: "3px",
          margin: "1rem",
          display: "flex",
        }}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(event) => setTitle(event.target.value)}
      />
      <div>
        {posts
          .filter((item) => item.title.toUpperCase().includes(title))
          .map((item) => {
            return (
              <>
                <div>
                  {item.id} ) {item.title.toUpperCase()}
                </div>
              </>
            );
          })}

        {data
          .filter((item) => item.title.toUpperCase().includes(title))
          .map((item) => {
            return (
              <>
                <div>
                  {item.id} ) {item.title.toUpperCase()}
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};
export default DisplayData;
