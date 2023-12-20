import React from "react";
import {
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#FFF", marginRight: "2rem" }} />
            <div>
              <p>NO: 5 Kalari Muniyappan Kovil St..</p>
              <p>Kallakurichi.</p>
              <p>TamilNadu.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#FFF", marginRight: "2rem" }}
              />
              <a href="tel:9787498776" target="blank">
                +91 9787498776
              </a>
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#FFF", marginRight: "2rem" }}
              />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vjpragaaa@gmail.com"
                target="blank"
              >
                pragadeeswaran647@gmail.com
              </a>
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About ME</h4>
          <p>this is me pragadeeswaran</p>

          <div className="social">
            <a href="https://github.com/pragadeeswaran17" target="blank">
              <FaGithub
                size={30}
                style={{ color: "#FFF", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://www.instagram.com/___pragaa?igshid=YTQwZjQ0NmI0OA=="
              target="blank"
            >
              <FaInstagram
                size={30}
                style={{ color: "#FFF", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/pragadeeswaran-r-7a6ab621a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="blank"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#FFF", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
