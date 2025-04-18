import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {

    const verifyCookie = async () => {
      
      const { data } = await axios.get(
        "https://tradeeasy.onrender.com/verifyUser",
       
        { withCredentials: true }
      );
      const { status, user } = data;
      console.log(user);
      setUsername(user);
      if (!status) {
        removeCookie("token");
        window.location.href = "https://tradeeasy-frontend.onrender.com/login";
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    window.location.href = "https://tradeeasy-frontend.onrender.com";;
  };

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleDropdownOpen = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <>
      <div className="menu-container">
        <img src="logo3.png" style={{ width: "5%" }} />
        <div className="menus">
          <ul>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/"
                onClick={() => handleMenuClick(0)}
              >
                <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                  Dashboard
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/orders"
                onClick={() => handleMenuClick(1)}
              >
                <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                  Orders
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/holdings"
                onClick={() => handleMenuClick(2)}
              >
                <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                  Holdings
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/positions"
                onClick={() => handleMenuClick(3)}
              >
                <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                  Positions
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/funds"
                onClick={() => handleMenuClick(4)}
              >
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                  Funds
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
               
                onClick={Logout}
              >
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                  Logout
                </p>
              </Link>
            </li>
          </ul>
          <hr />
          <div className="profile">
            <div className="avatar">ZU</div>
            <div className="usename">
              <p style={{color:"white"}}>{username}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
