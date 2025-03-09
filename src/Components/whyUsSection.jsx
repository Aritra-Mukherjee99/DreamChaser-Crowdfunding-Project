import React from "react";
import ChildImage from "./assets/whyus.jpg";
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
  return (
    <React.Fragment>
      <div className="row col-12">
        <div className={`col-md-8 ${styles.whyUs}`}>
          <h1 className={styles.header}>Why Choose DreamChaser?</h1>
          <div className={styles.para}>
          
    <p>At DreamChaser, we believe in the power of dreams and the collective strength of the community. Here's why you should choose us to bring your dreams to life:</p>
    <ul>
        <li><strong>Empowering Dreams</strong>: Our mission is to empower dreamers from all walks of life. Whether you're an entrepreneur, artist, or innovator, we're here to support your vision and help you turn your ideas into reality.</li>
        <li><strong>Seamless Experience</strong>: We provide a user-friendly platform that makes it easy to launch, manage, and promote your crowdfunding campaign. Our intuitive interface ensures that you can focus on what matters most—your project.</li>
        <li><strong>Community Driven</strong>: DreamChaser is built on the foundation of community support. We connect you with a passionate community of backers who believe in your dream and are eager to see you succeed.</li>
        <li><strong>Transparency and Trust</strong>: We prioritize transparency and trust in every step of the crowdfunding process. Our secure platform ensures that funds are managed responsibly, and backers can trust in the integrity of your campaign.</li>
        <li><strong>Resources and Support</strong>: We offer a wealth of resources, from marketing tips to campaign strategies, to help you maximize your success. Our dedicated support team is always ready to assist you and answer any questions you may have.</li>
        <li><strong>Innovative Features</strong>: DreamChaser offers innovative features like real-time analytics, social media integration, and personalized campaign pages, giving you the tools you need to stand out and attract backers.</li>
    </ul>
    <p>Join DreamChaser today and be part of a community that believes in making dreams a reality. Together, we can chase dreams, one project at a time.</p>
          </div>
        </div>
        <div className="col-md-4">
          <img className={styles.image} src={ChildImage} alt="HappyKids" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyUs;
