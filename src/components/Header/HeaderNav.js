import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = ({location}) => {
  const {pathname} = location;
  return (<div className="header-nav">
    <div className="header-logo-name">
      <Link to="/" title={'Home'}>
        LOGO + Company Name
      </Link>
    </div>
    <div className="nav-items">
      <div className={pathname === '/'
          ? 'active'
          : null}>
        <Link to="/" title={'Home'}>
          Home
        </Link>
      </div>
      <div className={pathname.match(/\/About/i)
          ? 'active'
          : null}>
        <Link to="/About" title={'About'}>
          About
        </Link>
      </div>
      <div className={pathname.match(/\/News/i)
          ? 'active'
          : null}>
        <Link to="/News" title={'News'}>
          News
        </Link>
      </div>
      <div className={pathname.match(/\/Portfolio/i)
          ? 'active'
          : null}>
        <Link to="/Portfolio" title={'Portfolio'}>
          Portfolio
        </Link>
      </div>
      <div className={pathname.match(/\/Team/i)
          ? 'active'
          : null}>
        <Link to="/Team" title={'Team'}>
          Team
        </Link>
      </div>
      <div className={pathname.match(/\/Contact/i)
          ? 'active'
          : null}>
        <Link to="/Contact" title={'Contact'}>
          Contact
        </Link>
      </div>
    </div>
  </div>)
}

export default HeaderNav;
