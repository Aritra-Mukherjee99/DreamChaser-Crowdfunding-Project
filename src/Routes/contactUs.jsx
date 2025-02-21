import React from "react";
import NavBar from "../Components/navbar_notLanding";
import Form from "../Components/queryForm";
import ScrollToTop from "../Components/scrollToTop";
import styles from "../Components/styles/contactUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>CONTACT US</h1>
        <div className={styles.content}>
        We're thrilled that you're interested in supporting DreamChaser! If you have any questions, comments, or need assistance, please don't hesitate to reach out.
          <br />
          <br />
          <div className={styles.map}>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3684.2929268336356!2d88.433397!3d22.568145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x71861af46a1692b9!2sSugam%20Business%20Park!5e0!3m2!1sen!2sin!4v1624620513238!5m2!1sen!2sin"
              width="600"
              height="380"
              frameBorder="0"
              aria-hidden="false"
            ></iframe>
          </div>
          <div className="row">
            <div className={`col-md-8 ${styles.contactUs}`}>
              <h1 className={styles.inheader}>Get In Touch</h1>
              <p className={styles.inpara}>
                Feel free to contact us in case of any queries
              </p>
              <div className={styles.content}>
                <Form />
              </div>
            </div>
            <div className={`col-md-4 ${styles.details}`}>
              <h1 className={styles.inheader}>Our Office</h1>
              <p className={styles.incontent}>
                <b>DREAM CHASER</b>
                <br />
                SECTOR-5,
                <br />
                SALT LAKE,
                <br /> KOLKATA, WEST BENGAL-700091
                <br /> <br />
                For any queries, reach us out at email : dreamchaser@gmail.com
                <br />
                +91-9976543216
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
