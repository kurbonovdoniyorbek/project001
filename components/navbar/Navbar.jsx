import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../public/assets/logo.png"
import { HiMenuAlt3 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import Image from 'next/image'
import { BsGlobe } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [navActive, setNavActive] = useState(false)
    return (
        <nav>
            <div className={`navbar ${navActive ? "nav_active" : ""}`}>
                <ul className='nav_container-links'>
                    <li className="nav_container-links-item">
                        <Link to='magazine'
                            onClick={() => setNavActive(false)}
                        >
                            МАГАЗИН
                        </Link>
                    </li>
                    <li className="nav_container-links-item">
                        <Link to='about'
                            onClick={() => setNavActive(false)}>
                            О КОМПАНИИ
                        </Link>
                    </li>
                    <li className="nav_container-links-item">
                        <Link to='product'
                            onClick={() => setNavActive(false)}>
                            ПРОДУКЦИЯ
                        </Link>
                    </li>
                    <li className="nav_container-links-item">
                        <Link to='service'
                            onClick={() => setNavActive(false)}>
                            УСЛУГИ
                        </Link>
                    </li>
                    <li className="nav_container-links-item">
                        <Link to='news'
                            onClick={() => setNavActive(false)}>
                            АКЦИИ И НОВОСТИ
                        </Link>
                    </li>
                    <li className="nav_container-links-item">
                        <Link
                            onClick={() => setNavActive(false)}>
                            ОБРАТНАЯ СВЯЗЬ
                        </Link>
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
