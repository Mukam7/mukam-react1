import React, { Component } from "react";
import style from "../about/About.css";

import aboutCardImg1 from "../../assets/images/about-card1.png";
import aboutCardImg2 from "../../assets/images/about-card2.png";
import aboutCardImg3 from "../../assets/images/about-card3.png";

export default class About extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="about-txt">
            <h1 className="all-h1">About Us</h1>
            <p>
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed{" "}
              <br />
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
          </div>
          <div className="about-card-box">
            <div className="about-card-box-card">
              <img src={aboutCardImg1} alt="card-img" />
              <h3>1. Schedule online</h3>
              <p>
                Sagittis nibh scelerisque vitae egetolment vulputate <br /> sem
                elementum sed n.
              </p>
            </div>
            <div className="about-card-box-card">
              <img src={aboutCardImg2} alt="card-img" />
              <h3>2. Pay online easily</h3>
              <p>
                Vitae ut accumsan blandit ullamcorperolm <br /> suscipit dui
                gravida amet at nunc.
              </p>
            </div>
            <div className="about-card-box-card">
              <img src={aboutCardImg3} alt="card-img" />
              <h3>3. Get your house cleaned</h3>
              <p>
                Nunc maecenas sollicitudin metus tellus mattis <br /> sed
                porttitor cursus eleifend.
              </p>
            </div>
          </div>
          <div className="about-btn">
            <button className="btn-basic">Get a free quote</button>
            <button className="btn-basic-2">Explore services</button>
          </div>
        </div>
      </section>
    );
  }
}
