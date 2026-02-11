import React from 'react';
import logoImage from './taarangana_logo.png'; // Ensure path is correct
import styles from './Navbar.module.css';

const Navbar = ({ onNavigate }) => {
  
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Itinerary', id: 'itinerary' },
    { label: 'Smaran', id: 'smaran' },
    { label: 'Sponsors', id: 'sponsors' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (onNavigate) {
        onNavigate(id);
    }
  };

  return (
    <header className={styles.navbarContainer}>
      <div className={styles.logoBox}>
        <img
          src={logoImage}
          alt="Taarangana Logo"
          className={styles.logoImg}
        />
      </div>

      <nav className={styles.navLinksBox}>
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <a
                href={`#${item.id}`} 
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;