import { useEffect, useState } from "react";
import Task from "./Task";

function TasksList() {
  const [tasks, setTasks] = useState([])
  const [del,setDel] = useState(false)

  useEffect(() => {
    setTasks(JSON?.parse(localStorage?.getItem("tasks")));
  }, [del]);

  return (
    <div>
      {tasks?.map((e, i) => {
        return (
          <div key={i}>
            <Task del={del} setDel={setDel} task={e} index={i} />
          </div>
        );
      })}
    </div>
  );
}

export default TasksList;
