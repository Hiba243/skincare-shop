import './Home.css'
import Product from './Product'
import useProducts from './use-products';
import useImages from './use-images';
import { Link } from 'react-router-dom'
import React, { useRef, useEffect } from 'react';
import CSSRulePlugin from "gsap/CSSRulePlugin";
import useOnScreen from './useOnScreen';
import LandingPageImg from '../images/landing_page.jpg';
import Lip from '../images/lip.jpg';
function Home() {
  const products = useProducts();
  const images = useImages();

  const productsList = products.map((prdct) => <Product
    key={prdct.id}
    id={prdct.id}
    title={prdct.title}
    price={prdct.price}
    image={prdct.image}
    desc={prdct.desc}
  />
  );
  const id = images[0] ? images[0].imgId : '';
  const imgId = products[0] ? products[0].id : '';
  return (
    <div className="home">
      <div>
        <Link to={"/products/" + id}>
          <div className="img-containerHome">
            <img src={LandingPageImg ? LandingPageImg : ''} alt="home-pg" />
          </div>
        </Link>
      </div>
      <div id="productList"><p className="shopProductsHeading section-padding">OUR PRODUCTS</p>
        <p className="shopProductsSubHeading section-padding">We created Superfluid with the aim of making skincare easy and stress free, fun and bold. And we forgot - all of our products are also vegan and cruelty free.</p></div>
      <div className="home__row section-padding">
        {productsList}
      </div>
      <div className="about" id="about">
        <div className="abt-img">
          <Link to={"/products/" + imgId}>

            <div className="img-containerAbout">
              <img src={ Lip ? Lip : ''} alt="home-img" />
            </div>

          </Link>
        </div>
        <div className="features">
          <div className="feature__1">
            <p className="abt-content">SuperSkin is a skincare line inspired by real skin - with the aim of making skincare easy and stress free. Explore all 20+ products for all needs and all budgets</p>
            <br />
            <p className="abt-content">We’re serious about ingredients. Our ingredients are carefully selected and we are at the forefront of the clean beauty movement. No toxins. Only goodness.</p>
            <br />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
