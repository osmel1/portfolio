import styles from "../styles/about.module.css";
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Image from 'next/image'
import js from '../skillsIcons/javascript.png'
import htmlIcon from '../skillsIcons/html.png'
import Mysql from '../skillsIcons/mysql.png'
import ReactIcon from '../skillsIcons/react.png'
import PythonIcon from '../skillsIcons/python.png'
import cssIcon from '../skillsIcons/css.png'
export default function About(){
    return (<div className={styles.all}>
    <h1 className={styles.aboutMe}>About Page</h1>
    <p className={styles.bio}>I'm a software developer that loves building products and web applications that impact millions of lives. Currently working on</p>
    <div className={styles.twoZone}>
        <div className={styles.firstOne}>
            <div>
                <li><strong>Contact</strong></li>
                <p> For any sort help/ enquiry , shoot a <Link href="" className={styles.normalLinks}>mail</Link> and I'll get back.</p>
                <li><strong>Job Opportunities</strong></li>
<p> I'm looking for a job currently , if you see me as a good fit , chekc my <Link href='' className={styles.normalLinks}>CV</Link>.</p>
            <li><strong>Social Links</strong></li>
            <div className={styles.marginTop}>
            <div className={styles.marginBottom}><AiOutlineArrowRight color="black" size={16} /><Link href="https://web.facebook.com/" className={styles.textdecoNone}>Facebook </Link></div>
            <div className={styles.marginBottom}><AiOutlineArrowRight color="black" size={16} /><Link href="https://web.facebook.com/" className={styles.textdecoNone}>LinkedIn </Link></div>
            <div className={styles.marginBottom}><AiOutlineArrowRight color="black" size={16} /><Link href="https://web.facebook.com/" className={styles.textdecoNone}>Instagram </Link></div>
           <div className={styles.marginBottom}><AiOutlineArrowRight color="black" size={16} /><Link href="https://web.facebook.com/" className={styles.textdecoNone}>Twitter </Link></div>
           </div>
            </div>
        </div>
        <div className={styles.secondOne}>
 <p>I am a data analyst with [number of years of experience] of experience in analyzing data and extracting insights to inform decision-making. I am passionate about leveraging data to drive business success and have worked in various industries, including [mention relevant industries or sectors]. </p> 
 <p>My expertise includes data analysis, statistical modeling, and data visualization, along with proficiency in programming languages such as [mention relevant programming languages, e.g., Python, R, SQL].</p> 
 <p >I have a strong track record of using data to uncover actionable insights, optimize processes, and solve complex problems. I am excited about working with data and collaborating with cross-functional teams to drive data-driven strategies and achieve measurable results</p>

 <div>
    <Image
src={js}
height={80}
width={80}
/>
<Image
src={htmlIcon}
height={80}
width={80}
/>
<Image
src={Mysql}
height={80}
width={80}
/>
<Image
src={ReactIcon}
height={80}
width={80}
/>
<Image
src={PythonIcon}
height={80}
width={80}
/>
<Image
src={cssIcon}
height={80}
width={80}
/>
 </div>

        </div>
    </div>
    </div>
        
    )
}