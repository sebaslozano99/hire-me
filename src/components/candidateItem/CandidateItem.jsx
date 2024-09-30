import styles from "./CandidateItem.module.css";
import PropTypes from "prop-types";
import Button from "../button/Button";
import { Link } from "react-router-dom";


export default function CandidateItem({candidate}) {
  return (
    <div className={styles.candidateCard} >
        <Link to={candidate.dob.date} className={styles.candidateCardLink} >
        
        <div className={styles.firstDiv} >

          <img src={candidate.picture.large} alt={candidate.picture.medium} />
          
          <div>
            <p>Hi, my name is</p>
            <h1>{candidate.name.first} {candidate.name.last}</h1>
          </div>

        </div>

        <div className={styles.secondDiv}>

          <Button className={styles.btn} >
            <i className='bx bx-user-circle bx-sm'></i>
          </Button>

          <Button className={styles.btn}>
            <i className='bx bx-envelope bx-sm'></i>
          </Button>

          <Button className={styles.btn}>
            <i className='bx bx-list-ul bx-sm'></i>
          </Button>

          <Button className={styles.btn}>
            <i className='bx bxs-location-plus bx-sm'></i>
          </Button>

          <Button className={styles.btn}>
            <i className='bx bx-phone-call bx-sm'></i>
          </Button>

        </div>

      </Link>
    </div>
  )
}


CandidateItem.propTypes = {
    candidate: PropTypes.object,
}