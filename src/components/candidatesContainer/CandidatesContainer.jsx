import { useEffect, useRef } from "react";
import { useUsers } from "../../contexts/UsersContext";
import CandidateItem from "../candidateItem/CandidateItem";
import PaginationBtns from "../paginationBtns/PaginationBtns";
import Spinner from "../spinner/Spinner";
import styles from "./CandidatesContainer.module.css";
import PropTypes from "prop-types";


export default function CandidatesContainer() {

  const { candidates, isLoading, page } = useUsers();
  const divEl = useRef(null);


  useEffect(() => {
    if(page){
      divEl.current.scrollIntoView({
        behavior: "smooth",
      })
    }
  }, [page])

  if(isLoading) return (
    <div className={styles.isLoadingContainer} >
      <Spinner />
    </div>
  )
  
  return (
    <div className={styles.container} ref={divEl} > 
      <ul className={styles.cardsContainer}>
        {
          candidates?.map((candidate) => <CandidateItem key={candidate.login.uuid} candidate={candidate} />)
        }
      </ul>

      <PaginationBtns />
    </div>
  )
}

CandidatesContainer.propTypes = {
    candidates: PropTypes.array,
}
