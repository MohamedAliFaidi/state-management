import { useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";

import { Routes, Route } from "react-router-dom";
import TasksList from "./components/TasksList";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksList />} />
        <Route path="/add-todo" element={<TaskForm />} />
        <Route path="/edit-todo/:id" element={<TaskForm />} />
      </Routes>
    </>
  );
}

export default App;
