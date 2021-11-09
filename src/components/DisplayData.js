import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

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
      </div>
      <TextField id="outlined-basic" label="Search Words" variant="outlined" />
    </div>
  );
};
export default DisplayData;
