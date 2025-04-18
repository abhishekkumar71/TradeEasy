import { useState } from "react";

export default function Table() {
  const [activeTable, setActiveTable] = useState("equity");

  return (
    <>
      {/* navbar */}
      <nav class="navbar nav-underline navbar-expand-lg border-bottom mb-5 mx-5 px-5">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a
                class="nav-link   fs-5 "
                aria-current="page"
                onClick={() => {setActiveTable("equity")}}
                href="#" 
              >
                Equity
              </a>
              <a
                class="nav-link fs-5"
                aria-current="page"
                onClick={() => setActiveTable("currency")}
                href="#"
              >
                Currency
              </a>
              <a
                class="nav-link fs-5"
                aria-current="page"
                onClick={() => setActiveTable("commodity")}
                href="#"
              >
                Commodity
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* TABLES */}
      <div className="table-div">
        {activeTable === "equity" && (
          <table className="my-table border " id="equity" >
            <thead className="text-center border">
              <tr>
                <th>&nbsp;</th>
                <th> Equity delivery</th>
                <th>Equity intraday</th>
                <th>F&O - Futures</th>
                <th> F&O - Options</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>Brokerage</td>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>
                  order whichever is lower 0.03% or Rs. 20/executed order
                  whichever is lower
                </td>
                <td> Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td> 0.1% on buy & sell</td>
                <td> 0.025% on the sell side</td>
                <td>0.02% on the sell side</td>
                <td>
                  <ul>
                    <li>
                      0.125% of the intrinsic value on options that are bought
                      and exercised
                    </li>
                    <li>0.1% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td>Transaction charges</td>
                <td>
                  NSE: 0.00297%
                  <br />
                  BSE: 0.00375%
                </td>
                <td>
                  NSE: 0.00297% <br />
                  BSE: 0.00375%
                </td>
                <td>
                  NSE: : 0.00173% <br />
                  BSE: 0
                </td>
                <td>
                  NSE: 0.03503% (on premium) <br />
                  BSE: 0.0325% (on premium)
                </td>
              </tr>

              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>

              <tr>
                <td>SEBI charges</td>
                <td>₹10 / crore </td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore </td>
              </tr>

              <tr>
                <td>Stamp charges</td>
                <td>0.015% or ₹1500 / crore on buy side </td>
                <td>0.003% or ₹300 / crore on buy side</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td> 0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        )}

        {activeTable === "currency" && (
          <table className="my-curr-table border " id="currency">
            <thead className="text-center border">
              <tr>
                <th>&nbsp;</th>
                <th> Currency futures</th>
                <th>Currency options</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹ 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>No STT </td>
                <td>No STT </td>
              </tr>

              <tr>
                <td>Transaction charges</td>
                <td>
                  NSE: 0.00035% <br />
                  BSE:0.00045
                </td>
                <td>
                  NSE: 0.0311% <br />
                  BSE: 0.001%
                </td>
              </tr>

              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>
                  18% on (brokerage + SEBI charges + transaction charges){" "}
                </td>
              </tr>

              <tr>
                <td>SEBI charges</td>
                <td>₹10 / crore </td>
                <td>₹10 / crore </td>
              </tr>

              <tr>
                <td>Stamp charges</td>
                <td> 0.0001% or ₹10 / crore on buy side </td>
                <td> 0.0001% or ₹10 / crore on buy side </td>
              </tr>
            </tbody>
          </table>
        )}

        {activeTable === "commodity" && (
          <table className="my-curr-table border " id="currency">
            <thead className="text-center border">
              <tr>
                <th>&nbsp;</th>
                <th> Commodity futures</th>
                <th> Commodity options</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>Brokerage</td>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>
                  MCX: 0.0021%
                  <br />
                  NSE: 0.0001
                </td>
                <td>
                  MCX:0.0418%
                  <br />
                  NSE: 0.001%
                </td>
              </tr>

              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>

              <tr>
                <td>SEBI charges</td>
                <td>
                  Agri:
                  <br />
                  ₹1 / crore
                  <br />
                  Non-agri:
                  <br />
                  ₹10 / crore
                </td>
                <td>₹10 / crore </td>
              </tr>

              <tr>
                <td>Stamp charges</td>
                <td>0.002% or ₹200 / crore on buy side </td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <div className="fs-small text-muted mt-5 p-5 mx-5">
        <h4 className="mx-5">Disclaimer</h4>
        <p className="mx-5">
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>{" "}
      </div>
    </>
  );
}
