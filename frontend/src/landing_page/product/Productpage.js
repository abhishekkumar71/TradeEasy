import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function Productpage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgURL="media/images/kite.png"
        ProductName="Kite"
        ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        TryDemo=""
        LearnMore=""
        appStore=""
        PlayStore=""
      />
      <RightSection
        imgURL="media/images/console.png"
        ProductName="Console"
        ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        LearnMore=""
      />{" "}
      <LeftSection
        imgURL="media/images/coin.png"
        ProductName="Coin"
        ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        TryDemo=""
        LearnMore=""
        appStore=""
        PlayStore=""
      />
      <RightSection
        imgURL="media/images/kiteconnect.png"
        ProductName="Kite Connect API"
        ProductDescription="TBuild powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        LearnMore=""
      />
      <LeftSection
        imgURL="media/images/varsity.png"
        ProductName="Varsity mobile"
        ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        TryDemo=""
        LearnMore=""
        appStore=""
        PlayStore=""
      />
      <h5 className="text-center text-muted">
        Want to know more about our technology stack? Check out the{" "}
        <a href="" style={{ textDecoration: "none" }}>
          Zerodha.tech blog
        </a>
        .
      </h5>
      <Universe />
    </>
  );
}

export default Productpage;
