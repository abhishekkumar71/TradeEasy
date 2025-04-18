import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function SellActionWindow({ uid, price }) {
  const [stockQty, setStockQty] = useState(1);
  const [stockPrice, setStockPrice] = useState(price);
  const generalContext = useContext(GeneralContext);
  const handleSellClick = async () => {
    try {
      const response = await axios.post(
        "https://tradeeasy.onrender.com/newOrder",
        {
          name: uid,
          qty: stockQty,
          price: stockPrice,
          mode: "SELL",
        },
        { withCredentials: true }
      );
      console.log(response);
      try {
        generalContext.closeSellWindow();
        toast.success("Sell order placed successfully.");
      } catch (e) {
        console.error("Error after response:", e);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(
          error.response.data.message || "Not enough holdings to sell."
        );
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      console.error("Sell failed:", error);
    }
  };
  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };
  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => {
                setStockQty(e.target.value);
              }}
              value={stockQty}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => {
                setStockPrice(e.target.value);
              }}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        {uid}
        <span>Selling starts at:{price}</span>
        <div>
          <Link className="btn btn-error" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
