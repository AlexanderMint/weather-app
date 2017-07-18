import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';

import './Header.less';

const Header = () => (
  <div className="header">
    <AppBar
      className="header__bar"
      title="forecast"
      iconElementLeft={<Link to="home"><span className="meteocons" data-icon="B" /></Link>}
    />
  </div>
);

export default Header;
