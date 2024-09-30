import styles from "./CandidateItem.module.css";
import PropTypes from "prop-types";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function CandidateItem({candidate}) {

  const [displayedInfo, setDisplayedInfo] = useState("name");

  return (
    <div className={styles.candidateCard} >
      <Link to={candidate.login.uuid} className={styles.candidateCardLink} >
        
        <div className={styles.firstDiv} >

          <img src={candidate.picture.large} alt={candidate.picture.medium} />
          
          <div>
            {displayedInfo === "name" && 
              <>
                <p>Hi, my name is</p>
                <h1>{candidate.name.first} {candidate.name.last}</h1>
              </>
            }
            {displayedInfo === "email" && 
              <>
                <p>My email address is</p>
                <h1>{candidate.email}</h1>
              </>
            }
            {displayedInfo === "dob" && 
              <>
                <p>My Date of birth is</p>
                <h1>{new Date(candidate.dob.date).toLocaleDateString()}</h1>
              </>
            }
            {displayedInfo === "address" && 
              <>
                <p>My address is</p>
                <h1>{`${candidate.location.street.number} ${candidate.location.street.name}`}</h1>
              </>
            }
            {displayedInfo === "phone" && 
              <>
                <p>My phone number is</p>
                <h1>{candidate.phone}</h1>
              </>
            }
          </div>

        </div>

        <div className={styles.secondDiv}>

          <Button  className={`${styles.btn} ${displayedInfo === "name" ? styles.selected : ""}`} onMouseEnter={() => setDisplayedInfo("name")} >
            <i className='bx bx-user-circle bx-sm'></i>
          </Button>

          <Button className={`${styles.btn} ${displayedInfo === "email" ? styles.selected : ""}`}  onMouseEnter={() => setDisplayedInfo("email")} >
            <i className='bx bx-envelope bx-sm'></i>
          </Button>

          <Button className={`${styles.btn} ${displayedInfo === "dob" ? styles.selected : ""}`} onMouseEnter={() => setDisplayedInfo("dob")} >
            <i className='bx bx-list-ul bx-sm'></i>
          </Button>

          <Button className={`${styles.btn} ${displayedInfo === "address" ? styles.selected : ""}`} onMouseEnter={() => setDisplayedInfo("address")} >
            <i className='bx bxs-location-plus bx-sm'></i>
          </Button>

          <Button className={`${styles.btn} ${displayedInfo === "phone" ? styles.selected : ""}`} onMouseEnter={() => setDisplayedInfo("phone")} >
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