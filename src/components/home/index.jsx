import React, { Component } from "react";
import style from "../home/Home.css";

import phoneCall from "../../assets/images/phone-call.png";
import cleaningMale from "../../assets/images/cleaning-male.png";

export default class index extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="home-box">
            <div className="home-box-left">
              <div className="home-box-left-txt">
                <h1>Quality cleaning for your home</h1>
                <p>
                  Condimentum mauris sit cursus amet id non neque pharetra nulla
                  ornare sed facilisis senectus dapibus nibh ultrices eget
                  suscipit aliquet et nulla magna lacus penatibus.
                </p>
              </div>
              <div className="home-box-left-txt-link">
                <button className="btn-basic">Get a free quote</button>
                <div className="btn-and-number">
                  <img src={phoneCall} alt="phone-call" />
                  <span>(414) 567 - 2109</span>
                </div>
              </div>
            </div>
            <div className="home-box-right">
              <img src={cleaningMale} alt="cleaningMale" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
