import React from "react";
import NavBar from "../components/NavBar";
import productIMG from "../assets/img-1.jpg";
import styles from "./PriceProduct.module.css";

const ProductPage = () => {
  return (
    <main className={styles.product}>
      <NavBar />
      <section>
        <img src={productIMG} alt="" />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
