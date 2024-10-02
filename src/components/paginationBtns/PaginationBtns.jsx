import { useUsers } from "../../contexts/UsersContext";
import Button from "../button/Button";
import styles from "./PaginationBtns.module.css";


export default function PaginationBtns() {

  const { page, nextPage, prevPage } = useUsers();

  console.log(page === 1);
  console.log(page);

  return (
    <div className={styles.btnContainer} >
        <Button fontSize={15} className={styles.btn} onClick={prevPage} disabled={page === 1} >&larr;</Button>
        <Button fontSize={15} className={styles.btn} onClick={nextPage} >&rarr;</Button>
    </div>
  )
}
