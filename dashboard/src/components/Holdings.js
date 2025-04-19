import React, { useState, useEffect } from "react";
import axios from "axios";
// import { holdings } from "../data/data";
import { AreaGraph } from "./AreaGraph";
import { ToastContainer } from "react-toastify";

export default function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("https://tradeeasy.onrender.com/allHoldings", { withCredentials: true })
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setAllHoldings(res.data);
        } else {
          setAllHoldings([]);
        }
      })
      .catch((error) => {
        setAllHoldings([]);
        console.error(error);
      });
  }, []);


  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        borderColor: "rgb(53, 235, 147)",
        backgroundColor: "rgba(53, 235,147, 0.5)",
      },
    ],
  };


  return (
    <>
      {allHoldings.length === 0 ? (
        <p style={{ color: "white" }}>No holdings available!!</p>
      ) : (
        <>
          <h3 className="title">Holdings({allHoldings.length})</h3>

          <div className="order-table">
            <table>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.cost</th>
                <th>LTP</th>
                <th>Cur.val</th>
                <th>P&L</th>
                <th>Net chg.</th>
                <th>Day chg.</th>
              </tr>

              {allHoldings.map((stock, index) => {
                const currValue = stock.qty * stock.price;
                const isProfit = currValue - stock.avg * stock.qty >= 0.0;
                const profitClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "true";

                return (
                  <>
                    <tr key={index}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td>{currValue.toFixed(2)}</td>
                      <td className={profitClass}>
                        {(currValue - stock.avg * stock.qty).toFixed(2)}
                      </td>

                      <td className={profitClass}>{stock.net}</td>
                      <td className={dayClass}>{stock.day}</td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>
          <AreaGraph data={data} />
        </>
      )}
    </>
  );
}
