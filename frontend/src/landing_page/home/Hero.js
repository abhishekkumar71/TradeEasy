import React from "react";
function Hero() {
  return (
    <>
      <div className="container p-5">
        <div className="row text-center ">
          <div
            className="container-fluid images"
            style={{
              width: "100%",
              marginRight: "5rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="media/images/left.png"
              className="mb-4 leftImg"
              alt="left img"
              style={{ width: "24%", height: "80%", marginTop: "2.6rem" }}
            />
            <img
              src="media/images/watchlist.png"
              className="mb-4 centerImg"
              alt="center img"
              style={{ width: "53%" }}
            />{" "}
            <img
              src="media/images/holdings.png"
              className="mb-4 rightImg"
              alt="right img"
              style={{ width: "30%", height: "80%", marginTop: "2.6rem" }}
            />
          </div>
          <h1 className="mt-5">Invest in everything</h1>
          <p className="m-4 fs-5">Online platform to invest in stocks</p>
          <button
            className="btn btn-primary fs-5"
            style={{ width: "18%", margin: "0 auto" }}
          >
            Signup now
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
