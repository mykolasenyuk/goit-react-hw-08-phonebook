import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {isLoggedIn ? (
        <NavLink
          to="/phonebook"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Phonebook
        </NavLink>
      ) : (
        <NavLink
          to="/"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Home
        </NavLink>
      )}
    </nav>
  );
}