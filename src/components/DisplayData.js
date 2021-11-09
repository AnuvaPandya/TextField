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
    <>
      <div>
        {data.map((element) => {
          <div>
            {element.id} ) {element.title.toUpperCase()}
          </div>;
        })}
        {/* <TextField
          id="outlined-basic"
          label="Search Words"
          variant="outlined"
        /> */}
      </div>
    </>
  );
};
export default DisplayData;
