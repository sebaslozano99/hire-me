import styles from "./Hire.module.css";
import { Outlet } from "react-router-dom";
import HireNav from "../../components/hireNav/HireNav";




export default function Hire() {


  return (
    <main className={styles.hire} >
      <HireNav />
      <Outlet />
    </main>
  )
}
