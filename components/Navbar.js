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
  const [isCollapsed, setIsCollapsed] = useState(true); // Added state for collapse icon

  // Function to handle click on collapse icon
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

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
                <Link href={link.path} className={`navbar-toggler ${isCollapsed ? '' : 'collapsed'}`}>
                  <p key={index}>{link.name}</p>
                </Link>
              </li>
              </>
            );
        })}
        </div>
        <div>
          <li><a href="https://web.facebook.com/" target="_blank" ><AiFillFacebook color="white" size={20}/></a></li>
          <li><a href="https://instagram.com/" target="_blank"><AiFillInstagram color="white" size={20}/></a></li>
          <li><a href="https://github.com/" ><AiFillGithub color="white" size={20}/></a></li>
        </div>
      </ul>
    
    </div>
    </div>
  );
}
