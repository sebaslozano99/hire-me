import CandidateItem from "../candidateItem/CandidateItem";
import styles from "./CandidatesContainer.module.css";
import PropTypes from "prop-types";


export default function CandidatesContainer({candidates}) {

  if(!candidates.length) return <p>Loading...!</p>
  
  return (
    <div className={styles.container} >
      {
        candidates?.map((candidate) => <CandidateItem key={candidate.email} candidate={candidate} />)
      }
    </div>
  )
}

CandidatesContainer.propTypes = {
    candidates: PropTypes.array,
}
