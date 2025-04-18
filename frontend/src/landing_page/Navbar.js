import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        class="navbar  navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img src="media/images/logo3.png" style={{ width: "10%" }} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/login">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/signup">
                  Signup
                </Link>
              </li>

              {/* <li class="nav-item">
                <Link class="nav-link active"to="/product">
                  Products
                </Link>
              </li> */}

              {/* <li class="nav-item">
                <Link class="nav-link active"to="/support">
                  Support
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
