import React from "react";
import "./Frontpage.css";
import Chefpic from "../../images/chef2.png";
import Tomatoes from "../../images/tomatoes.png";
import Friedrice from "../../images/friedrice.png";
import Burger from "../../images/burger.png";
import Sandwich from "../../images/sandwich.png";

import App1 from "../../images/app1.png"
import App2 from "../../images/app2.png"

// type writer importing 
import Typewriter from "typewriter-effect";
function Frontpage() {
  return (
    <div>
      <div>
      <section id="hero" class="d-flex align-items-center" />

      <div class="container">
        <div class="row">
          <div
            class="hero-left col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-1 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* <h1><Typewriter onInit={(typewriter) => {
            typewriter.typeString("Hungry?").pause(2000).deleteAll().typeString("Order foods").deleteAll().start();
          }}
          /></h1> */}

            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Hungry?",
                    "feeling lazy to cook at night?", "Wanna try something new?", "Wanna have a dinner date?",
                  ],
                  
                  autoStart: true,
                  loop: true,
                  
                }}
              />
            </h1>

            <h2>Order food from the best restaurants close to you.</h2>
            <div className="search-form-area">
              <form action="#">
                <input
                  type="text"
                  className="shadow"
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
                  <a href="#">& More</a>
                </p>
              </div>
            </div>
          </div>
          <div
            class="hero-right col-lg-6 order-2 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="img-fluid hero-image">
              <img
                src={Chefpic}
                class="img-fluid animated"
                alt="Chef picture"
              />
            </div>
            <div className="hero-color-box shadow"></div>
            <img src={Tomatoes} alt="" className="img-fluid .hero-image tomatoes" />
            <img src={Friedrice} alt="" className="friedrice" />
            {/* <img src={Burger} alt="" className="burger" />
            <img src={Sandwich} alt="" className="sandwich" /> */}
          </div>
        </div>
      </div>

      
      </div>
{/* Appside section */}
     
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
                    <img src="" alt="" />
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
                    <img src="" alt="" />
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
                    <img src="" alt="" />
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
                    <img src="" alt="" />
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

     
    </div>
  );
}

export default Frontpage;
