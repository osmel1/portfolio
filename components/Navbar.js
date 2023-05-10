import React from "react";
import { navLinks } from "../links";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { Head } from "next/document";
import { AiFillFacebook,AiFillInstagram,AiFillGithub } from "react-icons/ai";

export default function Navbar() {
 const router = useRouter();
 const currentRouter= router.pathname;

  return (
    <div className={styles.all}>
    <div className={styles.header}>
      <ul className={styles.nav} role="navigation">
        <div>
          <li><div  className={styles.logo}>
      <p className={styles.newFont}>Oussama ELhachimi</p>
      <span className={styles.sousTitre}>Data Scientist</span>
    </div>
    
    </li>
        </div>
        <div>
        {
        navLinks.map((link, index) => {
            return (
              <>
              <li key={index}>
                <Link href={link.path} >
                  <p key={index} className={currentRouter === link.path ? styles.active : styles.nonActive}>{link.name}</p>
                </Link>
              </li>
              </>
            );
        })}
        </div>
        <div>
          <li><a href="https://web.facebook.com/" target="_blank" ><AiFillFacebook color="blue" size={20}
           onMouseOver={({target})=>target.style.color="white"}
          onMouseOut={({target})=>target.style.color="blue"}
          /></a></li>
          <li><a href="https://instagram.com/" target="_blank"><AiFillInstagram  size={20}
           onMouseOver={({target})=>target.style.color="white"}
    onMouseOut={({target})=>target.style.color="black"}
          /></a></li>
          <li><a href="https://github.com/" ><AiFillGithub  size={20}
           onMouseOver={({target})=>target.style.color="white"}
    onMouseOut={({target})=>target.style.color="black"}
          /></a></li>
        </div>
      </ul>
    
    </div>
    </div>
  );
}
