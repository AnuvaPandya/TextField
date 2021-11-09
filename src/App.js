import { TextField } from "@mui/material";
import "./App.css";
import DisplayData from "./components/DisplayData";

function App() {
  return (
    <div>
      <TextField id="outlined-basic" label="Search Words" variant="outlined" />
      <DisplayData />
    </div>
  );
}

export default App;
