import { useParams } from "react-router-dom";
import styles from "./SelectedCandidate.module.css";
import { useUsers } from "../../contexts/UsersContext";
import { useEffect } from "react";




export default function SelectedCandidate() {

  const { userId } = useParams();
  const { candidates } = useUsers();

  const selectedCandidate = candidates.find((candidate) => candidate.login.uuid === userId);

  
  useEffect(() => {
    console.log(selectedCandidate);
  }, [selectedCandidate])

  return (
    <div className={styles.selectedCandidate} >
      <img src={ selectedCandidate.picture.large } alt={selectedCandidate.picture.large} />
      <h1>{`${selectedCandidate.name.first} ${selectedCandidate.name.last}`}</h1>
      Selected User&apos;s id: {userId}
    </div>
  )
}
