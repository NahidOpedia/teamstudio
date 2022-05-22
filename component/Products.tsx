import { randomInt } from "crypto";
import React, { useState } from "react";

const navitem = ["All", "Vector", "Raster", "UI/UX", "Printing"];
function Products() {
  const [selected, setSelected] = useState("All");
  return (
    <section className="portfolio-area section-gap" id="portfolio">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content col-lg-10">
            <div className="title text-center">
              <h1 className="mb-10">This is what we can do for you</h1>
              <p>Who are in extremely love with eco friendly system..</p>
            </div>
          </div>
        </div>
        <div className="filters">
          <ul>
            {navitem.map((item, index) => (
              <li
                className={`${selected === item && "active"}`}
                data-filter="*"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="filters-content">
          <div className="row grid">
            {Array(12)
              .fill("")
              .map((item, index) => (
                <Product key={Math.floor(Math.random() * 11)} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;

function Product({ key }: any) {
  return (
    <div className="single-portfolio col-sm-4 all corporate">
      <div className="item">
        <img
          className="productImage"
          src={`https://source.unsplash.com/random/${Math.floor(
            Math.random() * 11
          )}`}
          alt="Work 1"
        />
        <div className="p-inner">
          <p>ID: {Math.floor(Math.random() * 11)}</p>
          <h4>3D Helmet Design </h4>
          <div className="cat">Corporate</div>
        </div>
      </div>
    </div>
  );
}
