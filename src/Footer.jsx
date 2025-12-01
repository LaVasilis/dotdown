import React from 'react';
import './styles.css';

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} MySite. All rights reserved.
    </footer>
  );
}

export default Footer;