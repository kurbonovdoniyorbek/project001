import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
//CSS
import './Header.css'
//PICTURES
import Logo from '../../public/assets/logo.png'
import rusFlag from '../../public/assets/mainpage/rus.png'
//ICONS
import { FaLocationDot } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { BiSearchAlt, BiLogoFacebook, BiChevronDown } from 'react-icons/bi'

const Header = () => {
    return (
        <header className='header_page'>
            <ul className='header_page-collection'>
                <li className='header_page-collection-item'>
                    <div className="header_page-collection-item-svg">
                        <FaLocationDot />
                    </div>
                    <p>г.Ташкент, Чиланзар
                        <br />
                        10 квартал, дом 3/1</p>
                </li>
                <li className='header_page-collection-item'>
                    <div className="header_page-collection-item-svg">
                        <IoCall />
                    </div>
                    <p><a href="tel:+998 71 276-62-53">+998 71 276-62-53</a>
                        <br />
                        <a href="tel:+998 71 276-62-54">+998 71 276-62-54</a></p>
                </li>
            </ul>
            <div className="header_page-logo">
                <Link href={"/"}><Image
                    src={Logo}

                    alt="website logo"
                /></Link>
            </div>
            <div className='header_page-btn_container'>
                <button>
                    <BiSearchAlt />
                </button>
                <button>
                    <Link href={"https://www.facebook.com/"}>
                        <BiLogoFacebook />
                        <p>Мы на Facebook</p>
                    </Link >
                </button>
                <button>
                    <Image src={rusFlag} />
                    <p>Русский</p>
                    <BiChevronDown />
                </button>
            </div>
        </header >
    )
}

export default Header
