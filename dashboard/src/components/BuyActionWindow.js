import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function BuyActionWindow({ uid, price }) {
  const [stockQty, setStockQty] = useState(1);
  const [stockPrice, setStockPrice] = useState(price);
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    axios.post(
      "https://tradeeasy.onrender.com/newOrder",
      {
        name: uid,
        qty: stockQty,
        price: stockPrice,
        mode: "BUY",
      },
      { withCredentials: true }
    );
    console.log(uid);
    toast.success("Buy order placed successfully.");
    generalContext.closeBuyWindow();
  };
  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
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
        <br />
        <span>Price:{stockPrice}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
