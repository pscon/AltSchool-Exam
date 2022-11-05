import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import { FiTwitter } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGlobeAfrica } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        <section className="social-media">
          <div className="social-media-wrap">
            <small className="website-rights">Tosin © 2022</small>
            <div className="social-icons">
              <Link
                className="social-icons-link linkedin"
                to="/"
                target="_blank"
                aria-label="Linkedin"
              >
                <AiFillLinkedin />
              </Link>
              <Link
                className="social-icons-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <FiTwitter />
              </Link>
              <Link
                className="social-icons-link website"
                to="/"
                target="_blank"
                aria-label="Website"
              >
                <FaGlobeAfrica />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
