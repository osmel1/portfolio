import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import OS from "../skillsIcons/personale.png"
import {HiCursorClick} from 'react-icons/hi'
import style from '../styles/home.module.css'
import 'animate.css';
export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <div className={style.all}>
        <div className={style.header_main}>
          <div className={style.professions}>
            <h1 className="animate__animated  animate__fadeInLeftBig animate__slower  color_green">Developer</h1>
            <h1 className="animate__animated animate__fadeInLeftBig animate__slow color_yellow">Data scientist</h1>
            <h1 className="animate__animated animate__fadeInLeftBig animate__fast  color_red">Engineer</h1>
            <h1 className="animate__animated animate__fadeInLeftBig animate__faster orange">Programmer</h1>
          </div>
          <div className={style.personal_image}>
               <Image
                  src={OS}
                  height={300}
                  width={260}
                  alt="Elhachimi Oussama"
                  />
          </div>
        </div>
        <div className={style.bio}>
          <p>Hi, My name is </p>
          <h1>ELHACHIMI Oussama</h1>
          <div className={style.bioContent}>
          {/* <button onClick={handleClick}> See More</button> */}
          <p  className={`.bioPara ${isClicked ? 'active' : ''}`}>
            I have the passion for using data to solve problems, and I'm highly skilled and experienced in this field. As someone who loves working with data, I enjoy the process of gathering and analyzing complex data sets.
          </p>
          </div>
        </div>
       
        <style jsx global>{`
        
.color_green{
  background-color: rgb(9, 151, 9);
}
.color_yellow{
  background-color: rgb(255, 255, 0);
}
.color_red{
  background-color: rgb(255, 35, 35);
}
.orange{
   background-color: rgb(248, 133, 25);
   padding-right: 10px ;
}


      `}</style>
    </div>
  );
}