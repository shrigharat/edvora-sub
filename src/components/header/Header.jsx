import React from 'react'
import "./Header.styles.scss";

const Header = () => {
  return (
    <header className='app-header'>
      <nav>
        <ul>
          <li className="logo">Edvora</li>
          <li className="user">Dhruv Singh</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header