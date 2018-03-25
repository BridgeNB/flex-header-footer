import React from 'react';
import { Link } from 'react-router-dom';

const LeonisFooter = (() => {
  return (<div className="leonis-footer">
    <div className="footer-logo-name">
      <Link to="/" title={'Home'}>
        LOGO + Leonis Venture
      </Link>
    </div>
    <div className="footer-address">
      <a>800 Wilshire Blvd</a><br/>
      <a>Los Angeles, CA 90017</a>
    </div>
    <div className="footer-contact">
      <a>+ 123-456-789</a><br/>
      <a>info@leonisventure.com</a>
    </div>
    <div className="footer-social-icon">
      <ul className="social-icons-list">
        <li className="social-icon">
          <a href="https://github.com/BridgeNB">
            <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg" alt="twitter"/>
          </a>
        </li>
        <li className="social-icon">
          <a href="https://www.linkedin.com/in/elvis-zheng-95270855/">
            <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" alt="linkedin"/>
          </a>
        </li>
        <li className="social-icon">
          <a href="https://www.facebook.com/yangqiao.zheng">
            <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg" alt="facebook"/>
          </a>
        </li>
      </ul>
    </div>
  </div>)
})

export default LeonisFooter;
