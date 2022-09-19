import React from "react";
import "./front.css";
import Fpic from "./images/front/img1.png";
// app download sec images
import Appstore from "../../Components/Front-page/images/appstore.png";
import Playstore from "../../Components/Front-page/images/playstore.png";

// image right
import App1 from "../Front-page/images/app1.png";
import App2 from "../Front-page/images/app2.png";
// social icons
import Facebook from "../Front-page/images/facebook.png"
import Instagram from "../Front-page/images/instagram.png"
import Twitter from "../Front-page/images/twitter.png"
function front() {
  return (
    <div>
      <div className="body">
        <div className="row">
          <div className="navside container-fluid">
            <div className="log-header container">
              <div className="logo-and-text">
                <div className="logo">
                  <p>SNAPFOODS</p>
                </div>
                <div className="nav-text">
                  <span className="nav-btn">
                    <button>
                      <a href="#">Login</a>
                    </button>
                    <button>
                      {" "}
                      <a href="#">Register</a>
                    </button>
                  </span>
                </div>
              </div>

              <div className="intro-text-search">
                <div className="ani-text">
                  <h1>Feeling Hungry?</h1>
                  <p>Order foods from amazing restaurant near you</p>
                </div>
                <div className="search-form">
                  <form action="#">
                    <input
                      className="search"
                      type="text"
                      placeholder="Enter your delivery location"
                    />
                    <button className=" find-btn">FIND FOODS</button>
                  </form>
                </div>

                {/* citi lists section */}
                <div className="city-section">
                  <div className="city-title">
                    <p className="ng">POPULAR CITIES IN NIGERIA</p>
                    <span>
                      <p>
                        <a href="#">Enugu</a>
                      </p>
                      <p>
                        <a href="#">Abuja</a>
                      </p>
                      <p>
                        <a href="#">Lagos</a>
                      </p>
                      <p>
                        <a href="#">Awka</a>
                      </p>
                      <p>
                        <a href="#">Kano</a>
                      </p>
                      <p>
                        <a href="#">Ibadan</a>
                      </p>
                      <p>
                        <a href="#">Owerri</a>
                      </p>
                      <p>
                        <a href="#">kaduna</a>
                      </p>
                      <p>
                        <a href="#">Asaba</a>
                      </p>
                      <p>
                        <a href="#">Warri</a>
                      </p>
                      <p>
                        <a href="#">& More</a>
                      </p>
                    </span>
                  </div>
                </div>

              {/* efficient section */}
                <div className="beautify-sec">
                  <div className="card-section">
                    <div className="card bg-warning">
                      <p>No minimum Order</p>
                      <img src="" alt="" />
                    </div>

                    <div className="card bg-success">
                      <p>Super Fast Delivery</p>
                      <img src="" alt="" />
                    </div>

                    <div className="card bg-primary">
                      <p>Liver Order Tracking</p>
                      <img src="" alt="" />
                    </div>
                  </div>
                </div>


              </div>
            </div>

            <div className="fron-picture">
              <div className="pic">
                <img src={Fpic} alt="" />
                <div className="color-box"></div>
              </div>
            </div>
          </div>
        </div>
        {/* app download section */}

        <div className="app-download-area">
          <div className="left">
            <div className="color-side">
              
            </div>
            <div className="app-left-text">
              <p>RESTAURANTS IN <br />
               YOUR POCKET!</p>
              <p>
                Order from your favourite restaurant near you <br />
                when you download and use SNAPFOODS App
              </p>
            </div>
            <div className="app-left-image">
              <img src={Playstore} alt="" />

              <img src={Appstore} alt="" />
            </div>
          </div>

          <div className="right">
            <img src={App1} alt="" />
            <img src={App2} alt="" />
          </div>
        </div>
      </div>

      {/* links section */}
      <div className="links-section">
        <div className="company-links">
          <p>Company</p>
          <span>
            <p>
              <a href="#">About Us</a>
            </p>

            <p>
              <a href="#">Careers</a>
            </p>

            <p>
              <a href="#">Team</a>
            </p>
          </span>
        </div>

        <div className="contact-links">
          <p>Help and Enquiries</p>
          <span>
            <p>
              <a href="#">Customer Care</a>
            </p>
            <p>
              <a href="#">Business Enquiries</a>
            </p>

            <p>
              <a href="#">Partnership</a>
            </p>

            <p>
              <a href="#">Ride with us</a>
            </p>
          </span>
        </div>

        <div className="legal-links">
          <p>Legals</p>
          <span>
            <p>
              <a href="#">Terms & Conditions</a>
            </p>
            <p>
              <a href="#">Refund & Cancellation</a>
            </p>

            <p>
              <a href="#">Privacy Policy</a>
            </p>
          </span>
        </div>
      </div>
      {/* foot section */}
      <footer>
        <div className="foot-menu">
          <div className="foot-logo">
          <div className="logo">
                  <p>SNAPFOODS</p>
                </div>

                <div className="foot-text">
               <p> © 2022 SNAPFOODS</p>
                </div>
                <div className="social-icons">
<img src={Facebook} alt="" />
<img src={Instagram} alt="" />
<img src={Twitter} alt="" />

                </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default front;
