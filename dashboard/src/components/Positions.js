import React, { useState, useEffect } from "react";
// import { positions } from "../data/data";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  useEffect(() => {
    axios
      .get("https://tradeeasy.onrender.com/allPositions", { withCredentials: true })
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setAllPositions(res.data);
        } else {
          setAllPositions([]);
        }
      })
      .catch((err) => {
        console.log(err);
        setAllPositions([]);
      });
  }, []);
  return (
    <>
      {allPositions.length === 0 ? (
        <h2 style={{ color: "white" }}>No positions available!</h2>
      ) : (
        <>
          <h3 className="title">Positions({allPositions.length})</h3>

          <div className="order-table">
            <table>
              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty</th>
                <th>Avg</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg</th>
              </tr>

              {allPositions.map((stock, index) => {
                const currValue = stock.qty * stock.price;
                const isProfit = currValue - stock.avg * stock.qty >= 0.0;
                const profitClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "true";

                return (
                  <>
                    <tr key={index}>
                      <td>{stock.product}</td>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td className={profitClass}>
                        {(currValue - stock.avg * stock.qty).toFixed(2)}
                      </td>

                      <td className={dayClass}>{stock.day}</td>
                    </tr>
                    <ToastContainer position="top-right" autoClose={3000} />
                  </>
                );
              })}
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Positions;
