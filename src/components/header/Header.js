import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Patch the English Bulldog</h1>
      <p>
        Click{' '}
        <a
          href="https://twitter.com/patch_bulldog"
          target="_blank"
          rel="noopener noreferrer">
          here{' '}
        </a>
        to see my Twitter
      </p>
    </div>
  );
};

export default Header;
