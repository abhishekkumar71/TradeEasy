import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../index.css";
const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios
      .get("https://tradeeasy.onrender.com/allOrders", { withCredentials: true })
      .then((res) => {
        if (res.data) {
          setAllOrders(res.data);
        } else {
          setAllOrders([]);
        }
      })
      .catch((err) => {
        console.error(err);
        setAllOrders([]);
      });
  });
  return (
    <>
      {allOrders.length === 0 ? (
        <h2 style={{color:"white"}}>No Orers Placed!</h2>
      ) : (
        <>
          <h3 className="title">Your Orders:({allOrders.length})</h3>
          {allOrders.length === 0 ? (
            <div className="orders">
              <div className="no-orders">
                <p>You haven't placed any orders today</p>

                <Link to={"/"} className="btn">
                  Get started
                </Link>
              </div>
            </div>
          ) : (
            <div className="order-table">
              <table>
                <tr>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>

                {allOrders.map((stock, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>{stock.name}</td>
                        <td>{stock.qty}</td>
                        <td>{stock.price}</td>
                        <td>{stock.mode}</td>
                      </tr>
                    </>
                  );
                })}
              </table>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Orders;
