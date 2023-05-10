import styles from "../styles/experience.module.css";
import { exprienceName } from "../experiences.js";
import { CCard, CCardBody, CCardTitle, CCardSubtitle, CCardText } from "@coreui/react";
import { useEffect,useRef } from "react";
export default function Experience() {
   const fourthRef = useRef(null);

  useEffect(() => {
    fourthRef.current.style.opacity = "0";
  }, []);
    return (<div class="allOfall">
        <h1 className={styles.experienceTitle}>Experiences</h1>
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.first}>
                    <h1>2020</h1>
                    <p>I completed my high school education at Imam Al-Ghazali High School, where I earned a Baccalaureate in Mathematics</p>
                </div>
                <div className={styles.second}></div>
                <div className={styles.third}>
                    <h1>2022</h1>
                    <p>I obtained a Diploma of University Studies in Mathematics, Computer Science, and Physics from FST Mohammedia between 2020 and 2022.</p>
                </div>
            </div>
            <div className={styles.fourth} ref={fourthRef}> </div>
            <div className={styles.container_second}>
                <div className={styles.first}>
                    <h1>2025</h1>
                    <p>I am currently pursuing a engineering's degree in Big Data & Cloud Computing from ENSET Mohammedia, which is scheduled to complete in 2025. </p>
                </div>
                <div className={styles.noneDs}>
                    <div className={styles.second}></div>
                <div className={styles.third}>
                    <h1>title</h1>
                    <p>paragraphe Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro error, sapiente aspernatur enim debitis repellat rerum in? Veniam dolore, asperiores atque est inventore ipsum nostrum eaque quo ratione, nemo rerum.</p>
                </div>
                </div>
            </div>
            <div className={styles.fourth} ref={fourthRef}></div>

        </div>
    </div>
    )
}
