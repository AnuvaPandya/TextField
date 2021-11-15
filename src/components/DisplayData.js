import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Loading from "./Loading";

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

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
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

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
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
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
          .filter((item) => item.title.toUpperCase().includes(title))
          .map((item) => {
            return (
              <>
                <div classname="border-2 m-1 p-2">
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
