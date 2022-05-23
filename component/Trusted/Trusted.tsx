import Image from "next/image";
import React from "react";
import styles from './trusted.module.css';

function Trusted() {
  return <div>
    <div className={styles.leftLogoSection}>
      <h3 className={styles.trastedHeading}>Trusted by...</h3>
      <div className={styles.row}>
        <div className={styles.row1}>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image src='/img/trust-logo-1.webp' layout="fill" />
          </div>
          <div>
            <Image src='/img/trust-logo-2.webp' width='100px' height='30px' />
          </div>
          <div>
            <Image src='/img/trust-logo-3.webp' width='100px' height='30px' />
          </div>
        </div>

        <div className={styles.row2}>
          <div>
            <Image src='/img/trust-logo-4.webp' width='100px' height='30px' />
          </div>
          <div>
            <Image src='/img/trust-logo-5.webp' width='100px' height='30px' />
          </div>
          <div>
            <Image src='/img/trust-logo-6.webp' width='100px' height='30px' />
          </div>
        </div>
      </div>
    </div>
    <div className="rightVideoSection"></div>
  </div>;
}

export default Trusted;
