import React from "react";
import "../Front/Front.css";
import Heroimage from "../images/Intro-front-images/img1.png";

// service and card images

import Card1 from "../images/Intro-front-images/card1.png";
import Card2 from "../images/Intro-front-images/card2.png";
import Card3 from "../images/Intro-front-images/card3.png";
import Card4 from "../images/Intro-front-images/card4.png";

/* app download and stores section images*/

import Playstore from "../images/Intro-front-images/playstore.webp";
import Appstore from "../images/Intro-front-images/appstore.webp";
import Appside from "../images/Intro-front-images/appside.png";

// foot-social icons

import Facebook from "../images/Intro-front-images/facebook.png"
import Instagram from "../images/Intro-front-images/instagram.png"
import Twitter from "../images/Intro-front-images/twitter.png"

import Navbar from "./Navbar";

function Front() {

  return (
    <div>
      <div className="body">
        <div className="">
          {/* navbar */}
      

          {/* hero bar */}

    <Navbar/>

          <section id="hero" class="d-flex align-items-center" />

          <div class="container">
            <div class="row">
              <div
                class="hero-left col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h1>Hungry?</h1>
                <h2>Order food from favourite restaurants near you.</h2>
                <div className="search-form-area">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="Enter your delivery location"
                    />
                    <button className="bg-success shadow">FIND FOOD</button>
                  </form>
                </div>

                <div className="citi-area">
                  <div className="city-title">
                    <p>POPULAR CITIES IN NIGERIA</p>
                  </div>
                  <hr />
                  <div className="city-lists">
                    <p>
                      <a href="#">Enugu</a>
                    </p>
                    <p>
                      <a href="#">Lagos</a>
                    </p>
                    <p>
                      <a href="#">Abuja</a>
                    </p>
                    <p>
                      <a href="#">Kano</a>
                    </p>
                    <p>
                      <a href="#">Port Harcourt</a>
                    </p>
                    <p>
                      <a href="#">& More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="hero-right col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img src={Heroimage} class="img-fluid animated" alt="" />
                <div className="hero-color-box shadow rounded"></div>
              </div>
            </div>
          </div>
          {/* end of hero section */}

          {/* <!-- ======= Services Section ======= --> */}
          <section id="services" class="services section-bg">
            <div class="container" data-aos="fade-up">
              <div class="section-title">
                <h2>Order food online in Nigeria</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>

              <div class="row">
                <div
                  class="col-xl-3 col-md-6 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div class="icon-box">
                    <img src={Card1} alt="" />
                    <h4>
                      Live Order Tracking
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi
                    </p>
                  </div>
                </div>

                <div
                  class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div class="icon-box">
                    <img src={Card2} alt="" />
                    <h4>
                      Super-Fast Delivery
                    </h4>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore
                    </p>
                  </div>
                </div>

                <div
                  class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div class="icon-box">
                    <img src={Card3} alt="" />
                    <h4>
                     Limitless Order
                    </h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia
                    </p>
                  </div>
                </div>

                <div
                  class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div class="icon-box">
                    <img src={Card4} alt="" />
                    <h4>
                      Friendly Delivery Partner
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End Services Section --> */}

          {/* app download and stores section */}

          <section id="hero" class="d-flex align-items-center" />

          <div class="container">
            <div class="row">
              <div
                class="hero-left col-lg-6 d-flex flex-column justify-
      content-center pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="appside-left">
                  <div className="appside-left-text">
                    <p>Download SnapEats App</p>
                    <p>
                      Order from your favourite restaurants, track and get your
                      food delivered <br />
                      in a flash when you use SnapEats App.
                    </p>
                  </div>
                  <div className="appside-left-image">
                    <img src={Playstore} alt="" className="shadow" />
                    <img src={Appstore} alt="" className="shadow" />
                  </div>
                </div>
              </div>
              <div class="hero-right col-lg-6 order-1 order-lg-2 hero-img">
                <img src={Appside} class="img-fluid animated" alt="" />
              </div>
            </div>
          </div>

          {/* Foot section starts */}

          <div className="footer">
            <div className="foot-text-title container">
              <span>
                <p>COMPANY</p>
                <li><a href="">About Us</a></li>
                <li><a href="">Career</a></li>
                <li><a href="">Blogs</a></li>
                <li><a href="">Team</a></li>
              </span>
              <span>
                <p>CONTACT</p>
                <li><a href="">Customer Support</a></li>
                <li><a href="">Enquiries</a></li>
                <li><a href="">Partner With Us</a></li>
              </span>
              <span>
                <p>LEGAL</p>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms & Conditions</a></li>
                <li><a href="">Refund & Cancellation</a></li>

              </span>
            </div>
<hr />
            {/* down footer  */}

            <div className="foot">
              <div className="foot-logo">
                SnapEats
              </div>

              <div className="copy-right-text">
              <p>© 2022 Snapeats</p>
              </div>

              <div className="foot-social-icons">
                <img src={Facebook} alt="" />
                <img src={Instagram} alt="" />
                <img src={Twitter} alt="" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Front;
