import React, { Component } from "react";
import style from "../articles/Articles.css";

import articlesCard1 from "../../assets/images/articles-card1.png";
import articlesCard2 from "../../assets/images/articles-card2.png";

export default class Articles extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="articles-txt">
            <div>
              <h1 className="all-h1">Articles & resources</h1>
            </div>
            <div>
              <button className="btn-basic btn-services">
                Get a free quote
              </button>
              <button className="btn-basic-2">Browse articles</button>
            </div>
          </div>
          <div className="articles-card-box">
            <div className="articles-card">
              <img src={articlesCard1} alt="card-img" />
              <div className="articles-overlay">
                <h3>
                  8 best vacuum cleaners to clean any mess for your home in 2022
                </h3>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className="time-and-box">
                  <span>Jan 28, 2022</span>
                  <button></button>
                </div>
              </div>
            </div>
            <div className="articles-card">
              <img src={articlesCard2} alt="card-img" />
              <div className="articles-overlay">
                <h3>
                  How to properly disinfect your phone and other electronics
                </h3>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>

                <div className="time-and-box">
                  <span>Feb 1, 2022</span>
                  <button></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
