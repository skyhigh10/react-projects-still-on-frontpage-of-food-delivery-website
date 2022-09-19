import React from "react";
import "../board/Board.css";
import playstore from "../../Components/images/playstore.png";
import appstore from "../../Components/images/appstore.png";
import App1 from "../../Components/images/app1.png";
import App2 from "../../Components/images/app2.png";
// socila icons import
import facebook from "../../Components/images/facebook.png"
import instagram from "../../Components/images/instagram.png"
import twitter from "../../Components/images/twitter.png"


function Board() {
  return (
    <div className=" board-body">
      <div className="container app">
        <div className="text-app">
          <p>
            Carry Restaurant in your
            <br /> pocket with you
          </p>
          <p>
            Order from your favorite restaurants <br /> & track on the go, with
            the all-new Snapfoods app.
          </p>
          <div className="app-logo">
            <img src={playstore} alt="" />
            <img src={appstore} alt="" />
          </div>
        </div>

        <div className="image-app">
          <div className="image2">
            <img src={App1} alt="" />
          </div>
          <div>
            <div className="image1">
              <img src={App2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr />

      {/* link texts area */}

      <div className="nav-links bg-danger container">
        <div className="Company-link">
          <h2>Company</h2>
          <p>
            <a href="#">About us</a>
          </p>
          <p>
            <a href="#">Team</a>
          </p>
          <p>
            <a href="#">Careers</a>
          </p>
          <p>
            <a href="#">SNAPFOODS Blog</a>
          </p>
        </div>

        <div className="contact-link">
          <h2>Contact</h2>
          <p>
            <a href="#">Help & Enquiries</a>
          </p>
          <p>
            <a href="#">Partner with us</a>
          </p>
          <p>
            <a href="#">Become an Investor</a>
          </p>
          <p>
            <a href="#">Ride with us</a>
          </p>
        </div>

        <div className="legal-link">
          <h2>Legal</h2>
          <p>
            <a href="#">Terms and Conditions</a>
          </p>
          <p>
            <a href="#">Privacy policies</a>
          </p>
          <p>
            <a href="#">Cookies policies</a>
          </p>
          <p>
            <a href="#">Refunds and Cancellations</a>
          </p>
        </div>
      </div>

      {/* footer */}
      <div className="footer-root container-fliud">
        <div className="footer-text">
          <div className="logo-foot">
            <p>SNAP</p>
            <p>FOODS</p>
          </div>

       <div className="copy-right">
       <p>2022 © SnapFoods</p>

        </div>  

        <div className="social-icons">
<img src={facebook} alt="Facebook icon" />
<img src={instagram} alt="Instagram icon" />
<img src={twitter} alt="Twitter icon" />

          </div>        
        </div>
      </div>
    </div>
  );
}

export default Board;
