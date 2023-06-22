import React, { useState } from "react";
import style from "./Header.module.css";
import "../common/Common.css";

import logoSite from "../../assets/images/logo-site.png";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <nav className={style["nav-link"]}>
          <div className={style["nav-link-left"]}>
            <li>
              <a href="#">
                <img src={logoSite} alt="logo-site" />
              </a>
            </li>
            <li>
              <a href="#" className={style["header-link"]}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={style["header-link"]}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={style["header-link"]}>
                Services
              </a>
            </li>
            <li>
              <a href="#" className={style["header-link"]}>
                Articles
              </a>
            </li>
            <li>
              <a href="#" className={style["header-link"]}>
                Contact
              </a>
            </li>
          </div>
          <div className={style["nav-link-right"]}>
            <li>
              <a href="#">Cart(0)</a>
            </li>
            <button className="btn-basic">Get a free quote</button>
          </div>
          <button
            id={style["navbar-open"]}
            onClick={() => setIsNavbarOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>
        <div
          id={style["navbar-responsive"]}
          style={{ top: isNavbarOpen ? "0" : "-100%" }}
        >
          <button
            id={style["navbar-close"]}
            onClick={() => setIsNavbarOpen(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className={style["mobile-link-left"]}>
            <li>
              <a href="#" className={style["mobile-link"]}>
                Home
              </a>
            </li>{" "}
            <br />
            <li>
              <a href="#" className={style["mobile-link"]}>
                About
              </a>
            </li>{" "}
            <br />
            <li>
              <a href="#" className={style["mobile-link"]}>
                Services
              </a>
            </li>
            <br />
            <li>
              <a href="#" className={style["mobile-link"]}>
                Articles
              </a>
            </li>
            <br />
            <li>
              <a href="#" className={style["mobile-link"]}>
                Contact
              </a>
            </li>
            <br />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
