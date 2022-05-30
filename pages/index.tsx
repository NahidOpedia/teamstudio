import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../component/Header/Header";
import Hero from "../component/Hero/Hero";
// import Megamenu from "../component/Megamenu/Megamenu";
import Partner from "../component/Partner/Partner";
import Trusted from "../component/Trusted/Trusted";
import Woker from "../component/Woker/Woker";

import { Resources, Product, WhyTeamStudio } from "../component/Megamenu/Megamenu";
import Footer from "../component/Footer/Footer";

// import Feedback from "../component/Feedback";
// import Header from "../component/Header";
// import Hero from "../component/Hero";
import Meta from "../component/Meta";
// import Products from "../component/Products";
// import Reviews from "../component/Reviews";
// import Services from "../component/Services";
import styles from "../styles/Home.module.css";
import CustomerCare from "../component/CustomerCare/CustomerCare";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta />

      <div className="protfolio-wrap">
        {/* <Header />
        <Hero />
        <Products />
        <Services />
        <Reviews />
        <Feedback />
        <Footer /> */}

        {/* new site components.. older code will be removed soon */}

        <Header />
        <div>
          Mega Menu
          <Product />
          <br />
          <Resources />
          <br />
          <WhyTeamStudio />
        </div>
        <Hero />
        <Trusted />
        <Woker />
        {/* <Partner />
        <CustomerCare /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
