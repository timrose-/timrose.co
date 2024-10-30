import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tim!</h1>
        <p className={styles.description}>
          A .NET and SQL Developer with over a decade of experience in leading transformative IT projects and driving efficiencies through
          innovative solutions. 
        </p>
        {/* <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a> */}
      </div>
      <img
        src={getImageUrl("hero/portrait.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
