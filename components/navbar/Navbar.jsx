import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='nav_container-links'>
                <li className="nav_container-links-item">
                    МАГАЗИН
                </li>
                <li className="nav_container-links-item">
                    О КОМПАНИИ
                </li>
                <li className="nav_container-links-item">
                    ПРОДУКЦИЯ
                </li>
                <li className="nav_container-links-item">
                    УСЛУГИ
                </li>
                <li className="nav_container-links-item">
                    АКЦИИ И НОВОСТИ
                </li>
                <li className="nav_container-links-item">
                    ОБРАТНАЯ СВЯЗЬ
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
