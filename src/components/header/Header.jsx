import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header} >
      <Logo />

      <ul>
        <li>
            <NavLink to="/account">Account</NavLink>
        </li>
        <li>
            <NavLink to="/hire">Hire</NavLink>
        </li>
      </ul>
    </header>
  )
}
