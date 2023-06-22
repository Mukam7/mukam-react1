import React, { Component } from "react";
import style from "../contact/Contact.css";

import phoneCall from "../../assets/images/phone-call.png";

export class Contact extends Component {
  render() {
    return (
      <section className="contact-us">
        <div className="container">
          <div className="contact-us-box">
            <div className="contact-us-box-left">
              <h1 className="all-h1">Contact Us</h1>
              <p>
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
              </p>

              <div className="btn-and-number">
                <img src={phoneCall} alt="phone-call" />
                <h3>(414) 567 - 2109</h3>
              </div>

              <h4>Not convinced yet?</h4>
              <p>
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </p>
              <button className="btn-basic-2">Browse our packages</button>
            </div>
            <div className="contact-us-box-right">
              <form className="form-box">
                <div>
                  <label id="fist-name">Full name</label>
                  <input type="text" id="firstName" name="firstName" />
                  <label id="Address">Address</label>
                  <input type="text" id="Address" name="Address" />
                  <label id="Requested">Requested service</label>
                  <input type="text" id="Requested" name="Requested" />
                </div>
                <div>
                  <label id="fist-name">Phone number</label>
                  <input type="number" id="phone-number" name="phone-number" />
                  <label id="Email">Email</label>
                  <input type="Email" id="Email" name="Email" />
                  <label id="Day-of">Day of service</label>
                  <input type="text" id="Day-of" name="Day-of" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
