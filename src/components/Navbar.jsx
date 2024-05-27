import { Link } from "react-router-dom";
 import "./navbar.css"
function Navbar() {
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
    </ul>
  );
}

export default Navbar;