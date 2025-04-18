import React from "react";
function Universe() {
  return (
    <>
      <div className="container text-center mt-5 p-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row">
          <div className="col-4 mt-5 p-3">
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ height: "50%", width: "50%", marginTop: "3px" }}
            />
            <p
              className="small text-muted mt-3 "
              style={{ textAlign: "center" }}
            >
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 mt-5 p-3">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ height: "50%", width: "50%", marginTop: "3px" }}
            />
            <p
              className="small text-muted mt-3 "
              style={{ textAlign: "center" }}
            >
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img
              src="media/images/goldenpiLogo.png"
              style={{ height: "40%", width: "50%" }}
            />
            <p
              className="small text-muted mt-3"
              style={{ textAlign: "center" }}
            >
              <br />
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-4 mt-5 p-3">
            <img
              src="media/images/streakLogo.png"
              style={{ height: "35%", width: "45%", marginTop: "3px" }}
            />
            <p
              className="small text-muted mt-3 "
              style={{ textAlign: "center" }}
            >
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 mt-5 p-3">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ height: "40%", width: "45%", marginTop: "3px" }}
            />
            <p
              className="small text-muted mt-3 "
              style={{ textAlign: "center" }}
            >
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img
              src="media/images/dittoLogo.png"
              style={{ height: "40%", width: "45%" }}
            />
            <p
              className="small text-muted mt-3"
              style={{ textAlign: "center" }}
            >
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Universe;
