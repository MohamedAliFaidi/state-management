import { useEffect, useState } from "react";
import Task from "./Task";

function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [del, setDel] = useState(false);

  useEffect(() => {
    setTasks(JSON?.parse(localStorage?.getItem("tasks")));
    localStorage.setItem(
      "count",
      JSON?.parse(localStorage?.getItem("tasks"))?.length
    );
  }, [del]);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {tasks?.map((e, i) => {
        return (
          <div style={{ padding: "20px" }} key={i}>
            <Task del={del} setDel={setDel} task={e} index={i} />
          </div>
        );
      })}
    </div>
  );
}

export default TasksList;
