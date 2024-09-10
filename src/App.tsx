import "./App.css";
import React from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

const App: React.FC = () => {
  return (
    <div>
      <h1>Todo App with Redux</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
