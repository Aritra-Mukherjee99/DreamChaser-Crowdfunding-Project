import React from "react";
import nobleCause from "./assets/noblecause.jpeg";
import styles from "./styles/nobelCauseComponent.module.css";

const NobelCauseComponent = () => {
  return (
    <React.Fragment>
      <div className={`col-12 m-auto ${styles.container}`}>
        <h1 className={styles.header}>Become a part of noble cause</h1>
        <p className={styles.para}>
        At DreamChaser, we're more than just a crowdfunding platform—we're a community of dreamers, supporters, and changemakers. By joining us, you become a vital part of a noble cause that empowers individuals to bring their dreams to life.
        Together, we can make a difference and create a brighter future for all. Whether you're an innovator, artist, entrepreneur, or simply someone with a vision, DreamChaser is here to support you every step of the way.
        Join us today and help turn dreams into reality. Let's chase dreams together! 🌟
        </p>
        <img className={styles.image} src={nobleCause} alt="noble cause" />
      </div>
    </React.Fragment>
  );
};

export default NobelCauseComponent;
