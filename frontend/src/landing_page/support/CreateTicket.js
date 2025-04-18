import React from "react";
function CreateTicket() {
  return (
    <>
      <div className="text-muted  text-start mx-5 mt-5 p-5">
        <h5>To create a ticket, select a relevant topic</h5>
        <div className="container">
          <div className="ticket row my-5">
            <div className=" col-4">
              <h5>
                <i class="fa-solid fa-square-plus"></i> &nbsp;&nbsp;Account
                Opening
              </h5>
              <a href="">Resident individual</a> <br />
              <a href="">Minor</a>
              <br />
              <a href="">Non Resident Indian (NRI)</a>
              <br />
              <a href="">Company, Partnership, HUF and LLP</a>
              <br />
              <a href="">Glossary</a>
            </div>
            <div className="col-4">
              <h5>
                <i class="fa-solid fa-user"></i>&nbsp;&nbsp;Your Zerodha Account
              </h5>
              <a href="">Your Profile</a> <br />
              <a href="">Account modification</a>
              <br />
              <a href="">
                Client Master Report (CMR) and <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Depository Participant
                (DP)
              </a>
              <br />
              <a href="">Nomination</a>
              <br />
              <a href="">Transfer and conversion of securities</a>
            </div>
            <div className="col-4">
              <h5>
                <i class="fa-solid fa-chart-simple"></i>&nbsp;&nbsp;Kite
              </h5>
              <a href="">IPO</a> <br />
              <a href="">Trading FAQs</a>
              <br />
              <a href="">Margin Trading Facility (MTF) and Margins</a>
              <br />
              <a href="">Charts and orders</a>
              <br />
              <a href="">Alerts and Nudges</a> <br />
              <a href="">General</a>
            </div>
          </div>

          {/* 2nd row */}
          <div className="ticket row my-5">
            <div className=" col-4">
              <h5>
                <i class="fa-solid fa-credit-card"></i> &nbsp; Funds
              </h5>
              <a href="">&nbsp;Add money</a> <br />
              <a href="">&nbsp;Withdraw money</a>
              <br />
              <a href="">&nbsp;Add bank accounts</a>
              <br />
              <a href="">&nbsp;eMandates</a>
            </div>
            <div className="col-4">
              <h5>
                <i class="fa-solid fa-address-card"></i>&nbsp;&nbsp;Console
              </h5>
              <a href="">Portfolio</a> <br />
              <a href="">Corporate actions</a>
              <br />
              <a href="">Funds statement</a>
              <br />
              <a href="">Reports</a>
              <br />
              <a href="">Profile</a> <br />
              <a href="">Segments</a>

            </div>
            <div className="col-4">
              <h5>
              <i class="fa-solid fa-coins"></i>&nbsp;&nbsp;Coin
              </h5>
              <a href="">Understanding mutual funds and Coin</a> <br />
              <a href="">Coin app</a>
              <br />
              <a href="">Coin web</a>
              <br />
              <a href="">Transactions and reports</a>
              <br />
              <a href="">National Pension Scheme (NPS)</a> <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTicket;
