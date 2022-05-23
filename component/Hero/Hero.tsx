import Image from "next/image";
import React from "react";
import { CgMail } from 'react-icons/cg';
import styles from './hero.module.css';

function Hero() {
  return (
    <div>
      <div className={styles.wrapper}>

        {/* left content section */}
        <div className={styles.leftContentSection}>
          <div className={styles.textSection}>
            <h1 className={styles.topHeading}>Freelancing made simple</h1>
            <p className={styles.topParagraph}>Indy helps you manage your freelance business. Send proposals, sign contracts, track billable hours, create invoices, and receive payments all in one place.
            </p>

            <div className={styles.topInputWrapper}>
              <div className={styles.innerInputWrapper}>
                <CgMail className={styles.mailIcon} />
                <input className={styles.topInput} type="email" placeholder="Enter your email.." />
              </div>
              <button className={styles.inputButton}>Start your free trail</button>
            </div>

          </div>
        </div>

        {/* right image section */}
        <div className="right-image-content">
          <Image
            src="/img/hero-image.webp"
            width={500}
            height={500} />
        </div>
      </div>
    </div>
  )

}

export default Hero;
