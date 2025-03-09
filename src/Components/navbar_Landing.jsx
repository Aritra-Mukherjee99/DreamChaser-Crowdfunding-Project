import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import styles from "./styles/navbar.module.css";

const NavBar = () => {
  const [navBackground, setNavBackground] = useState(styles.notscrolled);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 80) {
        setNavBackground(styles.scrolled);
      } else {
        setNavBackground(styles.notscrolled);
      }
    };

    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []); // ✅ Empty dependency array ensures effect runs only once

  return <Navbar navBackground={navBackground} />;
};

export default NavBar;


