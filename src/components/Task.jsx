import { useState } from "react";
import "./task.css";
import { useNavigate } from "react-router-dom";

function Task({ task, index, setDel, del }) {
  const navigate = useNavigate();
  const [isDone,setIsDone]=useState(false)
  const deleteTodo = () => {
    const confirmed = confirm("are you sure you want to delete this todo ? ");
    if (confirmed) {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      setDel(!del);
    }
  };

  const onCheck = (e) => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(e.target.checked)
    tasks[index].done = e.target.checked;
    setIsDone(e.target.checked)
    tasks.splice(index, 1 , tasks[index]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setDel(!del);
  };

  return (
    <div className="card">
      <h1>{task?.name}</h1>
      <p className="title">{task?.description}</p>
      <div style={{ margin: "24px 0" }}>
        <a href="#">
          <i className="fa fa-dribbble"></i>
        </a>
      </div>
      <p>
        <div className="card">
          <div>Mark as done</div>
          <input
            onChange={onCheck}
            placeholder="Done"
            type="checkbox"
            id="done"
            name="done"
            checked={task?.done}
            disabled={task.done}
          />
        </div>
        <br />
        <button
          onClick={() => {
            navigate("/edit-todo/" + index);
          }}
        >
          Edit
        </button>
        <button onClick={deleteTodo}>delete</button>
      </p>
    </div>
  );
}

export default Task;
