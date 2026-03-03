import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav aria-label="Main Navigation">
      <ul>
        <li><Link to="/">Reservations</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
