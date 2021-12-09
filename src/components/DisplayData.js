import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Loading from "./Loading";

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [string, setString] = useState("");
  const [posts, setPosts] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);

  const API = [
    "https://jsonplaceholder.typicode.com/todos",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/users",
  ];

  // const newPosts = async () => {
  //   try {
  //     const userPosts = await fetch(
  //       "https://jsonplaceholder.typicode.com/comments"
  //     );
  //     setPosts(userPosts);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   newPosts();
  // });

  useEffect(() => {
    fetch(API[randomNumber])
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [randomNumber]);

  return (
    <div>
      <div className="p-3 m-1 flex">
        <TextField
          // style={{
          //   padding: "3px",
          //   margin: "1rem",
          //   display: "flex",
          // }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(event) => setString(event.target.value)}
        />
      </div>
      <button
        onClick={() => setRandomNumber(Math.floor(Math.random() * API.length))}
      >
        Refresh with new API
      </button>
      <div>
        {/* {posts.map((item) => {
          return (
            <>
              <div>
                {item.title} {item.body}
              </div>
            </>
          );
        })} */}

        {data
          .filter((item) => JSON.stringify(item).includes(string))
          .map((item) => {
            return (
              <div>
                <div classname="border-2 m-1 p-2">
                  {item.id} - {item.name ? item.name : item.title}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default DisplayData;
