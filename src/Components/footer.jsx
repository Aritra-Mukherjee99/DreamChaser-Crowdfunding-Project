import React from "react";
// import { Link } from "react-router-dom";
import logo from "./assets/DreamChaser.png";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={`mb-0 p-4 ${styles.footer}`}>
      <div className="row">
        <div className={`col-12 col-sm-6 col-md-4 ${styles.left}`}>
          <a href="/">
            <img className={`${styles.logo}`} src={logo} alt="DREAMCHASER LOGO" />
          </a>
          <br />
          <p className={`${styles.caption}`}>
            DREAM CHASER <br /> SALT LAKE SECTOR-5<br />KOLKATA 
          </p>
        </div>
        <div className={`col-12 col-sm-6 col-md-4 ${styles.middle}`}>
          <p>
            <b>Follow us on</b>
          </p>
          <a
            className={`${styles.facebook}`}
            href="https://www.facebook.com/DREAMCHASER/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            className={`${styles.linkedin}`}
            href="https://in.linkedin.com/company/dream-chaser"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <br />
          <div className={`${styles.links}`}>
            <a className={`${styles.link}`} href="/about-us">
              About
            </a>
            <a className={`${styles.link}`} href="/contact-us">
              Contact Us
            </a>
            
          </div>
        </div>
        <div className={`col-12 col-sm-12 col-md-4 ${styles.right}`}>
          <p className={`${styles.names}`}>
            <span style={{ fontWeight: "bolder" }}>Developed By </span>
            <br />
            <a
              className={`${styles.name}`}
              href="http://www.linkedin.com/in/aritramukherjee25"
              target="_blank"
              rel="noreferrer"
            >
              Aritra Mukherjee
            </a>
            
            <br />
            <br />
            <span style={{ fontWeight: "bolder" }}>Designed By </span>
            <br />
            <a
              className={`${styles.name}`}
              href="http://www.linkedin.com/in/aritramukherjee25"
              target="_blank"
              rel="noreferrer"
            >
             Aritra Mukherjee
            </a>
          </p>
          <p>
            For any queries, reach out to us at email
            <br />
            <b>dreamchaser@gmail.com</b>
          </p>
        </div>
      </div>

      <div className={`${styles.footerBottom}`}>
        <hr className={`${styles.line}`} />
        <p style={{ textAlign: "center" }}>
          Copyright &copy; 2025 DREAM CHASER. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
