import Image from "next/image";
import React from "react";
import styles from './trusted.module.css';

function Trusted() {
  return <div className={styles.wrapper}>
    <div className={styles.leftLogoSection}>
      <h3 className={styles.trastedHeading}>Trusted by...</h3>
      <div className={styles.row}>
        <div className={styles.row1}>
          <div className={styles.imgdiv}>
            <Image src='/img/trust-logo-1.webp' layout="fill" />
          </div>
          <div className={styles.imgdiv}>
            <Image src='/img/trust-logo-2.webp' layout="fill" />
          </div>
          <div className={styles.imgdiv}>
            <Image src='/img/trust-logo-3.webp' layout="fill" />
          </div>
        </div>

        <div className={styles.row2}>
          <div className={styles.imgdiv}>
            <Image src='/img/trust-logo-4.webp' layout="fill" />
          </div>
          <div className={styles.imgdiv}>
            <Image src='/img/trust-logo-5.webp' layout="fill" />
          </div>
          <div className={styles.imgdiv}>
            <Image src='/img/trust-logo-6.webp' layout="fill" />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.rightVideoSection}>
      <iframe src="https://www.youtube.com/embed/BmzS0MNyH9I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  </div>;
}

export default Trusted;
