// import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

const DisplayData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div>
        {data.map((element) => {
          return (
            <div>
              {element.id} ) {element.title.toUpperCase()}
            </div>
          );
        })}
        {/* <TextField
          id="outlined-basic"
          label="Search Words"
          variant="outlined"
        /> */}
      </div>
    </div>
  );
};
export default DisplayData;
