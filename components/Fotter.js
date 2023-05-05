import React from 'react';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import styles from "../styles/Fotter.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__social}>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <AiFillFacebook color="black" size={20} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram color="black" size={20} />
            </a>
            <a href="mailto:youremail@example.com">
              <AiFillGithub color="black" size={20} />
            </a>
          </div>
          <p className={styles.footer__text}>© 2023 Oussama Elhachimi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;