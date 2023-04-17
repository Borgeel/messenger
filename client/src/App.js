import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Join} />
        <Route path="chat" Component={Chat} />
      </Routes>
    </Router>
  );
};

export default App;
