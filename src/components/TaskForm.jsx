import toast from "react-hot-toast";
import "./form.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAdd, submitEdit } from "../redux/slices/todo.slice";

function TaskForm() {

  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const tasks = useSelector(state=>{return state?.value})
  const [name, setName] = useState("");
  const [desription, setDescription] = useState("");
  const { id } = useParams();



  useEffect(() => {
    console.log(tasks);
    if (location.pathname.split("/").includes("edit-todo")) {
      setIsUpdate(true);
    } else {
      setIsUpdate(false);
    }
  }, [location.pathname]);
  const Add = (e) => {
    try {
      e.preventDefault();
      dispatch(
        submitAdd({
          name: e.target.name.value,
          description: e.target.description.value,
          done: false,
        })
      );

      toast.success("To do Added");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("unexcpected error");
    }
  };

  const Edit = (e) => {
    e.preventDefault();
    try {
      const body = {
        name: e.target.name.value,
        description: e.target.description.value,
        done: false,
      };

      dispatch(submitEdit({ id: id, body: body }));
     
      toast.success("To do updated");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("unexcpected error");
    }
  };

  return (
    <form onSubmit={isUpdate ? Edit : Add} className="form-example">
      {!isUpdate ? (
        <>
          {" "}
          <div className="form-example">
            <label htmlFor="name">Name: </label>
            <input  type="text" name="name" id="name" required />
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
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              name="name"
              id="name"
              value={tasks[id].name}
            />
          </div>
          <div className="form-example">
            <label htmlFor="description">Description: </label>
            <input
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
