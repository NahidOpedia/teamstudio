import Image from "next/image";
import React from "react";
import HeroImage from '../../public/img/hero.jpg';

function Hero() {
  return (
    <div>
      <div className="wrapper">
        <div className="left-text-content">
          <div className="style_block__TK6qm">
            <h1>Freelancing made simple</h1>
            <p>Indy helps you manage your freelance business. Send proposals, sign contracts, track billable hours, create invoices, and receive payments all in one place.
            </p>
            <div className="style_withError__Xg9Gh">
              <div className="style_container__0qlCb">
                <div className="style_inputWrapper__7WKKs">
                  {/* <image src="/icons/social/mail-outlined.svg" alt="Mail icon" /> */}
                  <input type="email" className="style_input__5K4zr" placeholder="Enter your email..." value="" />
                </div>
                <button className="style_button__rc1MS style_button__JPLJp">Start your free trial</button></div></div></div>
        </div>
        <div className="right-image-content">
          <Image src={HeroImage}></Image>
        </div>
      </div>
    </div>
  )

}

export default Hero;
