import { useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import { Routes, Route } from "react-router-dom";
import TasksList from "./components/TasksList";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

function App() {

  const tasks = useSelector((state)=>state.value)


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksList tasks={tasks} />} />
        <Route path="/add-todo" element={<TaskForm />} />
        <Route path="/edit-todo/:id" element={<TaskForm />} />
      </Routes>

    </>
  );
}

export default App;
