import React, { Component } from "react";
import style from "../services/Services.css";

import servicesCard1 from "../../assets/images/services-card1.png";
import servicesCard2 from "../../assets/images/services-card2.png";
import servicesCard3 from "../../assets/images/services-card3.png";
import covid19 from "../../assets/images/covid-19-img.png";
import phoneCall from "../../assets/images/phone-call.png";

export default class Services extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="services-box-txt">
            <h1 className="all-h1">Our Services</h1>
            <button className="btn-basic-2">Explore services</button>
          </div>
          <div className="services-box">
            <div className="services-box-card">
              <img src={servicesCard1} alt="card-img" />
              <h3>House cleaning</h3>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="services-box-card">
              <img src={servicesCard2} alt="card-img" />
              <h3>Office cleaning</h3>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="services-box-card">
              <img src={servicesCard3} alt="card-img" />
              <h3>Industrial cleaning</h3>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
          </div>
          <div className="covid-19-box">
            <div className="covid-19-box-left">
              <img src={covid19} alt="card-img" />
            </div>
            <div className="covid-19-box-right">
              <span>Covid-19 sanitization</span>
              <h2>
                We follow guidelines  to keep you safe from the COVID-19 virus
              </h2>
              <p>
                Lobortis mattis odio leo eget mauris met aliquet semper molestie
                sollicitudin congue massa mauris lectus.
              </p>
              <div className="btn-and-number">
                <button className="btn-basic">Get a free quote</button>
                <img src={phoneCall} alt="phone-call" />
                <h3>(414) 567 - 2109</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
