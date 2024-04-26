import * as React from "react";
import Button from "@mui/material/Button";
import "./App.css";

import Demo from "./components/mui-system/mui-system";

function App() {
  return (
    <div className="App">
      <Button variant="contained">Hello world</Button>

      <Demo />
    </div>
  );
}

export default App;
