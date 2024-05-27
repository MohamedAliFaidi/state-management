import { useEffect, useState } from "react";
import Task from "./Task";

function TasksList({tasks}) {

  


  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {tasks?.map((e, i) => {
        return (
          <div style={{ padding: "20px" }} key={i}>
            <Task task={e} index={i} />
          </div>
        );
      })}
    </div>
  );
}

export default TasksList;
