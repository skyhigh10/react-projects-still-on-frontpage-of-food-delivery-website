import React from "react";
import "../Navbar/Navbar.css";
import image from "../images/front-image.jpg";

function Navbar() 
{

  return (
    
    <div className="container">
      <div className="root">
        <div className="left">
          <div className="left-root">
            <div className="nav-logo">
              <div className="logo">
                <p>SNAP</p>
                <p>FOODS</p>
              </div>

              <div className="nav-links">
                <ul>
                  <li>
                    <a href="#">Login </a>
                  </li>
                  <li className="">
                    <a href="#" className="reg">
                      Register
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="hero-text">
          
                <h1 id="typing-text"></h1>
                

                <p>Search foods from amazing restaurants near you </p>
              </div>

              <div className="form">
                <form action="#" className="search-form">
                  <input
                    className="search-box"
                    type="text"
                    placeholder="Enter Your Location"
                    name="search"
                  />
                  <button id="search-btn" type="submit" className="bg-success">
                    FIND FOOD
                  </button>
                </form>
              </div>
            </div>

            <div className="city-title">
              <div className="c-text">
                <p> Popular cities in Nigeria</p>
              </div>
              <div className="city-names">
               <ul>
               <span>
                  <a href="#">Abuja</a>
                </span>
                <span>
                  <a href="#">Enugu</a>
                </span>
                <span>
                  <a href="#">Lagos</a>
                </span>
                <span>
                  <a href="#">Port Harcourt</a>
                </span>
                <span>
                  <a href="#">Asaba</a>
                </span>
                <span>
                  <a href="#">Kaduna</a>
                </span>
                <span>
                  <a href="#">Awka</a><br />
                </span>
                <span>
                  <a href="#">Ibadan</a>
                </span>
                <span>
                  <a href="#">&More</a>
                </span>
               </ul>
              </div>
            </div>
          </div>
        </div>

        {/* image side */}

        <div className="right">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
