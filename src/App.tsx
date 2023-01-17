import React from "react";
import "./App.css";
import Nav from "./component/nav/nav";
import Router from "./routes/routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Router />
    </div>
  );
};

export default App;
