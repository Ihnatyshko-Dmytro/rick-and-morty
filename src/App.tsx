import "./App.scss";
import "bulma/css/bulma.css";
import { Outlet } from "react-router-dom"
import React from 'react'

export const App:React.FC<{}> = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
