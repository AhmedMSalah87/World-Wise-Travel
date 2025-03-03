import React from "react";
import priceIMG from "../assets/img-2.jpg";
import styles from "./PriceProduct.module.css";
import NavBar from "../components/NavBar";

const PricingPage = () => {
  return (
    <main className={styles.product}>
      <NavBar />
      <section>
        <div>
          <h2>
            Simple pricing. <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src={priceIMG} alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
};

export default PricingPage;
