import React from "react";
function OpenAccount() {
  return (
    <>
      <div className="container p-5">
        <div className="row text-center ">
          <h1 className="mt-5">Open a Zerodha Account</h1>
          <p className="m-4 fs-5">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.          </p>
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

export default OpenAccount;
