import { useState } from "react";
import "./task.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { markAsDone, deleteTodo } from "../redux/slices/todo.slice";

function Task({ task, index}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCheck = (e) => {
    dispatch(markAsDone({ id: index, done: e.target.checked }));
  };

  const onDelete = () => {
    const confirmed = confirm("are you sure you want to delete this todo ? ");
    if (confirmed) {
      dispatch(deleteTodo({ id: index }));
    }
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
          console.log(index);
          navigate("/edit-todo/" + index);
        }}
      >
        Edit
      </button>
      <button onClick={onDelete}>delete</button>
    </div>
  );
}

export default Task;
