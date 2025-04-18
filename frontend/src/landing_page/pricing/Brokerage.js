import React from "react";
function Brokerage() {
  return (
    <div className="container">
      <div className="pricetext row  p-5">
        <div className="col-4 justify-center
        mt-3 ">
          <img src="media/images/pricing0.svg" className="priceimg" />
          <h2 >Free equity delivery</h2>
          <p className="pricetext text-muted mt-4">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/intradayTrades.svg" className="priceimg" />
          <h2>Intraday and F&O trades</h2>
          <p className="text-muted mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricing0.svg" className="priceimg" />
          <h2>Free direct MF</h2>
          <p className=" text-muted mt-4">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
