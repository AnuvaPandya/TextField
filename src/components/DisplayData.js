import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(event) => setId(event.target.value)}
      />
      <div>
        {data.map((item) => {
          return (
            <>
              <div>
                {item.id} ) {item.title.toUpperCase()}
                {data.filter((item) => item.title.toUpperCase().includes())}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default DisplayData;
