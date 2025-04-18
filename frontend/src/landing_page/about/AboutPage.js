import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
function AboutPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgURL="media/images/watchlist.png"
        ProductName="Watchlist"
        ProductDescription="The watchlist lets users track selected stocks in real-time. It displays live data like current price, daily change, and percentage movement"
      />
      <RightSection
        imgURL="media/images/holdings2.png"
        ProductName="Holdings"
        ProductDescription="Holdings show the stocks currently owned by the user, along with quantities and average buy prices."
      />
      <LeftSection
        imgURL="media/images/orders.png"
        ProductName="Orders"
        ProductDescription="Orders reflect the most recent transactions placed by the user. This includes pending or just-executed buy/sell actions, giving a snapshot of the latest activity in the account."
      />
      <RightSection
        imgURL="media/images/positions.png"
        ProductName="Positions"
        ProductDescription="Positions keep a complete record of all buy and sell transactions. Each entry includes stock name, quantity, price, and timestamp, helping users analyze their trading history."
      />
    </>
  );
}

export default AboutPage;
