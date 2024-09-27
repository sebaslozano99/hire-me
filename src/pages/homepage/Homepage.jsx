import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import styles from "./Homepage.module.css";


export default function Homepage() {
    
  return (
    <main className={styles.homepage} >
      <section>
        <p><strong>HireRemote</strong> takes care of the boring part! 
        <br/>
        You enjoy the best talent of the world!</p>

        <Link to="/hire" >
          <Button fontSize={20} padding={7} >
            Hire Now!
          </Button>
        </Link>

      </section>
    </main>
  )
}
