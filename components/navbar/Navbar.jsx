import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../public/assets/logo.png"
import { HiMenuAlt3 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import Image from 'next/image'
import { BsGlobe } from 'react-icons/bs'

const Navbar = () => {
    const [navActive, setNavActive] = useState(false)
    return (
        <nav>
            <div className={`navbar ${navActive ? "nav_active" : ""}`}>
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
                <div className="navbar_close"
                    onClick={() => setNavActive(p => !p)}
                >
                    <RxCross2 />
                </div>
            </div>
            <div className="navbar_collections">
                <div className="navbar_collection_image">
                    <Image src={logo} />
                </div>
                <div className="navbar_lang">
                    <BsGlobe />
                </div>
                <div className="navbar_catalogue"
                    onClick={() => setNavActive(p => !p)}
                >
                    <HiMenuAlt3 />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
