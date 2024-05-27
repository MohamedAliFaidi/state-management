import { Link } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";
function Navbar() {
  const [count, SetCount] = useState(0);
  useEffect(() => {
    SetCount(localStorage.getItem("count"));
  }, []);
  return (
    <ul>
      <li>
        <Link className="active" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="active" to="/add-todo">
          Add Todo
        </Link>
      </li>

      <li style={{ float: "right", color: "white" }}>There is {count} Todos</li>
    </ul>
  );
}

export default Navbar;
