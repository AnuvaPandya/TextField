import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <TextField
        style={{
          margin: "8rem",
          padding: "20px",
          margin: "rem",
        }}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(event) => setTitle(event.target.value)}
      />
      <div>
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
