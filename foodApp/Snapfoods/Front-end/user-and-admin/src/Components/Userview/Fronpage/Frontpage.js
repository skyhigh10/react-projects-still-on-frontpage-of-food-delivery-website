import React from "react";
import "../Fronpage/Frontpage.css";
import Heroimage from "../Fronpage/images/Intro-front-images/img3.png"

function Frontpage() {
  return (
    <div>
      <div class="body">
        <div class="nav-bar ">
          <nav>
            <div class="logo">
              <p>SnapEats</p>
            </div>
            <ul>
              <li>
                <a href="/Partnership">Parner With Us</a>
              </li>
              <li>
                <a href="/Login">Login</a>
              </li>
              <li>
                <a href="/Register">Register</a>
              </li>
              <li>
                <a href="#">Download App</a>
              </li>
              
            </ul>
          </nav>
        </div>

        {/* Search-text-area */}
        <div class="search-text">
          <div class="texta">
            <div class="anim-text">
              <h1>Hingery?</h1>
              <p>
                Order foods from favourite <br />
                restaurant near you
              </p>
            </div>
          </div>
<div class="hero-image">
  <img src={Heroimage} alt="Hero Image" />
  <div class="hero-color-box">

  </div>
</div>

          <form action="#">
            <input type="text" placeholder="Enter your delivery loaction" />
            <button class="find-btn">FIND FOODS</button>
          </form>
        </div>
        <div class="cities-area">
          <div class="city-title">
            <p>POPULAR CITIES IN NIGERIA</p>
          </div>
          <div class="city-list">
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
              <a href="#">Awka</a>
            </p>
            <p>
              <a href="#">Ibadan</a>
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

      {/* Carasoul image section */}
      <div class="carasousal">
        <div class="head-text"></div>
        <div class="image-box">
          <img src="" alt="Image1" />
          <img src="" alt="Image1" />
          <img src="" alt="Image1" />
          <img src="" alt="Image1" />
          <img src="" alt="Image1" />
        </div>
      </div>
      
{/* Download app section */}
      <div class="download-app-sec">
        <div class="left"></div>
        <div class="right"></div>
      </div>
{/* Sub-footer links section */}
      <div class="sub-foot">
        <div class="links-title">
          <div class="company">
            <p>Company</p>
            <span>
              <p>
                <a href="#">About Us</a>
              </p>
              <p>
                <a href="#">Career</a>
              </p>
              <p>
                <a href="#">Blogs</a>
              </p>
            </span>
          </div>

          <div class="contact">
            <p>Contact</p>
            <span>
              <p>
                <a href="#">Customer Support</a>
              </p>
              <p>
                <a href="#">Partner With Us</a>
              </p>
              <p>
                <a href="#">Ride With Us</a>
              </p>
            </span>
          </div>

          <div class="legal">
            <p>Legal</p>
            <span>
              <p>
                <a href="#">Terms & Conditions</a>
              </p>
              <p>
                <a href="#">Privacy Policies</a>
              </p>
              <p>
                <a href="#">Refund & Cancellation</a>
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* footer section */}

      <footer>
        <div class="foot-items">

          <div class="foot-logo">
<p>SNAPFOODS</p>
          </div>
          <div class="copy-right-text">
<p>© 2022 SNAPFOODS Limited</p>
          </div>

          <div class="foot-social-icons">
<img src="" alt="Facebook" />
<img src="" alt="Instagram" />
<img src="" alt="Twitter" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Frontpage;
