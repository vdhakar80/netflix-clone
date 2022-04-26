import React from "react";
import "./../css/About.css";
import { Facebook, Instagram, Twitter, LinkedIn } from "@material-ui/icons";

function About() {
  return (
    <footer className="about">
      <div className="all_service">
        <div className="service" style={{ marginLeft: "100px" }}>
          <h2 className="title">Company</h2>
          <h3>About Us</h3>
          <h3>Careers</h3>
          <h3>Investers</h3>
          <h3>Company</h3>
        </div>
        <div className="service">
          <h2 className="title">Subsidiaries</h2>
          <h3>Mx Player</h3>
          <h3>Amazon Prime</h3>
          <h3>You tube</h3>
          <h3>Facebook</h3>
        </div>
        <div className="service">
          <h2 className="title">Support</h2>
          <h3>Terms of Use</h3>
          <h3>Privacy Statement</h3>
          <h3>Cookie Policy</h3>
          <h3>Trademarks</h3>
        </div>
        <div className="service" style={{ marginRight: "100px" }}>
          <h2 className="title">Contact With Us</h2>
          <a
            href="https://www.facebook.com/vicky.dhakar.52/"
            alt="facebook"
            className="my_icon"
            target="_blank"
          >
            <Facebook />
          </a>
          <a
            href="https://www.linkedin.com/in/vicky-dhakar-22a183184/"
            alt="linkedin"
            className="my_icon"
            target="_blank"
          >
            <LinkedIn />
          </a>
          <a href="#" alt="twitter" className="my_icon">
            <Twitter />
          </a>
          <a href="#" alt="instagram" className="my_icon">
            <Instagram />
          </a>

          <span></span>
          <span></span>
        </div>
      </div>
      <div></div>
    </footer>
  );
}

export default About;
