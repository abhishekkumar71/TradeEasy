import React from "react";
function Pricing() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-5 p-5 mt-3">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/pricing" style={{ textDecoration: "none" }}>
            See pricing &nbsp; <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-7 p-5 mt-5">
          <div className="row">
            <div className="col-4" style={{display:"flex"}}>
              <img
                src="media/images/pricing0.svg"
                style={{ height: "80px" }}
              />
              <p style={{ fontSize: "12px" }}> Free account opening</p>
            </div>
            <div className="col-4" style={{display:"flex"}}>
              <img
                src="media/images/pricing0.svg"
                style={{ height: "80px" }}
              />
              <p style={{ fontSize: "12px" }}>
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col-4 "style={{display:"flex"}}>
              <img
                src="media/images/intradayTrades.svg"
                style={{ height: "80px" }}
              />
              <p style={{ fontSize: "12px" }}> Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
