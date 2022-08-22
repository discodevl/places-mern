import {useContext} from "react";
import { AuthContext } from "../../../context/auth-context";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

function NavLinks() {
  const authCtx = useContext(AuthContext);
  return (
    <ul className={styles['nav-links']}>
      <li>
        <NavLink to="/" exact>ALL USERS</NavLink>
      </li>
      {authCtx.isLoggedIn && <li>
        <NavLink to="/u1/places">my place</NavLink>
      </li>}
      {authCtx.isLoggedIn &&<li>
        <NavLink to="/places/new">add place</NavLink>
      </li>}
      {!authCtx.isLoggedIn && <li>
        <NavLink to="/auth">auth</NavLink>
      </li>}
      {authCtx.isLoggedIn && <li>
        <button onClick={authCtx.logout}>Logout</button>
        </li>}
    </ul>
  );
}

export default NavLinks;
