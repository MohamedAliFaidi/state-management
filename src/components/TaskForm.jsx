import toast from "react-hot-toast";
import "./form.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [desription, setDescription] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (location.pathname.split("/").includes("edit-todo")) {
      setIsUpdate(true);
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      setName(tasks[id]["name"]);
      setDescription(tasks[id]["description"]);
    } else {
      setIsUpdate(false);
    }
  }, [location.pathname]);
  const submitAdd = (e) => {
    e.preventDefault();
    try {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      tasks?.push({
        name: e.target.name.value,
        description: e.target.description.value,
        done: false,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      toast.success("To do Added");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("unexcpected error");
    }
  };

  const submitEdit = (e) => {
    e.preventDefault();
    try {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      tasks.splice(id, 1, {
        name: e.target.name.value,
        description: e.target.description.value,
        done: false,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      toast.success("To do updated");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("unexcpected error");
    }
  };

  return (
    <form onSubmit={isUpdate ? submitEdit : submitAdd} className="form-example">
      {!isUpdate ? (
        <>
          {" "}
          <div className="form-example">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="form-example">
            <label htmlFor="description">Description: </label>
            <input type="text" name="description" id="description" required />
          </div>
        </>
      ) : (
        <>
          <div className="form-example">
            {" "}
            <label htmlFor="name">Name: </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="form-example">
            <label htmlFor="description">Description: </label>
            <input
              value={desription}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="text"
              name="description"
              id="description"
              required
            />
          </div>{" "}
        </>
      )}
      <div className="form-example">
        <input type="submit" value={isUpdate ? "Save" : "Add todo"} />
      </div>
    </form>
  );
}

export default TaskForm;
