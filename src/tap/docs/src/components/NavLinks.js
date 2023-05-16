import React from 'react';
import {Link, NavLink} from './links';

const NavLinks = (props) => {
  return(
    <>
      {props.desktop &&
        <NavLink 
          to="/docs/"
          activeClassName="active-navlink"
          partiallyActive={true}
        >
          Docs
        </NavLink>
      }
      <NavLink 
        to="/tap-protocol"
        activeClassName="active-navlink"
      >
        Tap Protocol
      </NavLink>
      <NavLink 
        to="/changelog"
        activeClassName="active-navlink"
      >
        Changelog
      </NavLink>
      <Link
        href="https://github.com/tapjs/node-tap"
      >
        GitHub
      </Link>
      <Link
        href="https://www.npmjs.com/package/tap"
      >
        npm
      </Link>
    </>
  );
};

export default NavLinks;
