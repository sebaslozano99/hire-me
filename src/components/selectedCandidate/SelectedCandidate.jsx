import { useUsers } from "../../contexts/UsersContext";
import { useParams } from "react-router-dom";
import styles from "./SelectedCandidate.module.css";




export default function SelectedCandidate() {

  const { userId } = useParams();
  const { candidates } = useUsers();

  const selectedCandidate = candidates.find((candidate) => candidate.login.uuid === userId);

  return (
    <section className={styles.selectedCandidate} >

      <div>
        <img src={ selectedCandidate.picture.large } alt={selectedCandidate.picture.large} />

        <div>
          <p>Hi, my name is</p>
          <h1>{`${selectedCandidate.name.first} ${selectedCandidate.name.last}`}</h1>
        </div>
      </div>
    </section>
  )
}
