import { NavLink } from "react-router-dom";
import styles from "./HireNav.module.css";


export default function HireNav() {
  return (
    <ul className={styles.hireNav} >
      <li>
        <NavLink to="candidates" >Candidates</NavLink>
      </li>
      <li>
        <NavLink to="mycandidates" >My Candidates</NavLink>
      </li>
    </ul>
  )
}
