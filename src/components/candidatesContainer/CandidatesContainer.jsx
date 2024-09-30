import { useUsers } from "../../contexts/UsersContext";
import CandidateItem from "../candidateItem/CandidateItem";
import styles from "./CandidatesContainer.module.css";
import PropTypes from "prop-types";


export default function CandidatesContainer() {

  const { candidates } = useUsers()

  if(!candidates.length) return <p>Loading...!</p>
  
  return (
    <div className={styles.container} >
      {
        candidates?.map((candidate) => <CandidateItem key={candidate.login.uuid} candidate={candidate} />)
      }
    </div>
  )
}

CandidatesContainer.propTypes = {
    candidates: PropTypes.array,
}
