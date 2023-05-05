import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../styles/contact.module.css";
import {BsTelephoneFill} from "react-icons/bs"
import { AiOutlineMail } from 'react-icons/ai'
import {BiCurrentLocation} from "react-icons/bi"
export default function Contact() {
const valuesButton=[{ 
    data:'084781744198'
},{
data:'contact@mail.com'
},{
  data:'517 Sackville Dr ,Lower Sackville,	Canada'
}]
let indexV=0
  const form = useRef();
const sendEmail = (e) => {
        e.preventDefault();
emailjs.sendForm('service_qan1ymt', 'template_yjp0vvv', form.current, 'BFgBvhP3rK_vjev8u')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
    };
const handleClick = (value) => {
    navigator.clipboard.writeText(value);
  };
  return (
    <>
    <div className={styles.all}>
    <h1>Contact</h1>
    <div className={styles.container}>
        <div className={styles.content}>
            <div>
                <h3>
                Get in touch , let's talk.
            </h3>
            <p>Fill in the details and I'll get back to you as soon as I can </p>
            </div>
            <div className={styles.icons}>
  <div>
    <li className={styles.iconsContent}>
      <button className={styles.backNone} onClick={() => handleClick(valuesButton[indexV == 0 ? indexV++ : indexV = 0].data)}>
        <BsTelephoneFill color="blue" size={20} />
        <span className={styles.copyMessage}>Click to copy</span>
      </button>
      <p className={styles.paddZero}>084781744198</p>
    </li>
  </div>
  <div>
    <li className={styles.iconsContent}>
      <button className={styles.backNone} onClick={() => handleClick(valuesButton[indexV == 1 ? indexV++ : indexV = 1].data)}>
        <AiOutlineMail color="blue" size={20} />
        <span className={styles.copyMessage}>Click to copy</span>
      </button>
      <p className={styles.paddZero}>contact@mail.com</p>
    </li>
  </div>
  <div>
    <li className={styles.iconsContent}>
      <button className={styles.backNone} onClick={() => handleClick(valuesButton[indexV == 2 ? indexV++ : indexV = 2].data)}>
        <BiCurrentLocation color="blue" size={20} />
        <span className={styles.copyMessage}>Click to copy</span>
      </button>
      <p className={styles.paddZero}>517 Sackville Dr, Lower Sackville, Canada</p>
    </li>
  </div>
</div>

        </div>
        <div className={styles.formContainer}>
<form ref={form} onSubmit={sendEmail} className={styles.formulaire} >
        <label htmlFor="first">Full Name</label>
      <input type="text"  name="full_name" required />

      <label  >E-mail</label>
      <input type="text"  name="email" required />
      <label  >Subject</label>
      <input type="text"  name="subject" required />
      
      <label >Message</label>
      <textarea type="text-area" name="msg" className={styles.msgContent} required></textarea> 
      <button type="submit">Submit</button>
    </form>
        </div>
    </div>
    </div>
  </>
)
}