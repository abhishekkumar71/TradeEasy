import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const toastShown = useRef(false);
const Summary = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    axios
      .get("https://tradeeasy.onrender.com/verifyUser", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status) {
          setUsername(res.data.user);
          if (!toastShown.current) {
            toast(`Hi, ${res.data.user}!`, { position: "top-right" });
            toastShown.current = true; // ✅ Prevents repeating
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
        </>
      )}
    </>
  );
};

export default Summary;
