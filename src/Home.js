import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/New_Family/M-series_1500x600_2._CB406906625_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home_row">
        <Product
          id="12321345"
          title="The Lean Startup"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          alt=""
        />

        <Product
          id="47965264"
          title="Samsung The Serif Series 123 cm (49 Inches) 4K Ultra HD Smart QLED TV QA49LS01TAKXXL (Cloud White) (2020 Model)"
          price={200}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/518RqUwjBTL._AC_US160_FMwebp_QL70_.jpg"
          alt=""
        />
      </div>

      <div className="home_row">
        <Product
          id="75915346"
          title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
          price={109}
          rating={4}
          image="https://m.media-amazon.com/images/I/71EoGntO5bL._AC_UL320_.jpg"
          alt=""
        />

        <Product
          id="2589634"
          title="Kenstar Aster Digi 1500-Watt Oxy Fryer (3.5 L,Black)"
          price={99}
          rating={4}
          image="https://m.media-amazon.com/images/I/51BVG63Iu+L._AC_UY218_.jpg"
          alt=""
        />

        <Product
          id="15937486"
          title="Apple iPad Mini (Wi-Fi, 64GB) - Space Grey"
          price={199}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/51-8ddCXl-L._AC_US160_FMwebp_QL70_.jpg"
          alt=""
        />
      </div>

      <div className="home_row">
        <Product
          id="12321345"
          title="Apple iPad (10.2-inch, Wi-Fi + Cellular, 32GB) - Space Grey (Latest Model)"
          price={149}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/416dHn+H27L._AC_US160_FMwebp_QL70_.jpg"
          alt=""
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
