import React from "react";
import axios from "axios";
import { useState, useEffect,useRef } from "react";
import { ToastContainer,toast } from "react-toastify";
const Summary = () => {
  const [username, setUsername] = useState("");
  const greeted = useRef(false);

  useEffect(() => {
    axios
      .get("https://tradeeasy.onrender.com/verifyUser", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status) {
          setUsername(res.data.user);
          if (!localStorage.getItem("greeted")) {
            toast(`Hello ${res.data.user}`, { position: "top-right" });
            localStorage.setItem("greeted", "true");
          }
        }
      })
      .catch((err) => {
        console.error(err);
        setUsername("");
      });
  }, []);

  return (
    <>
      {!username ? (
        <h2>Login to view Dashboard</h2>
      ) : (
        <>
          <div className="username">
            <h6>Hi,{username}!</h6>
            <hr className="divider" />
          </div>

          <div className="section">
            <span>
              <p style={{ color: "white" }}>Equity</p>
            </span>

            <div className="data">
              <div className="first">
                <h3>3.74k</h3>
                <p style={{ color: "white" }}>Margin available</p>
              </div>
              <hr />

              <div className="second">
                <p>
                  Margins used <span>0</span>{" "}
                </p>
                <p>
                  Opening balance <span>3.74k</span>{" "}
                </p>
              </div>
            </div>
            <hr className="divider" />
          </div>

          <div className="section">
            <span></span>

            <div className="data">
              <div className="first">
                <h3 className="profit">
                  1.55k <small>+5.20%</small>
                </h3>
                <p>P&L</p>
              </div>
              <hr />

              <div className="second">
                <p>
                  Current Value <span>31.43k</span>{" "}
                </p>
                <p>
                  Investment <span>29.88k</span>{" "}
                </p>
              </div>
            </div>
            <hr className="divider" />
          </div>
          <ToastContainer position="top-right"/>
        </>
      )}
    </>
  );
};

export default Summary;
