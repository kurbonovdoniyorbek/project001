import React from 'react'
import "./Footer.css"
import { FaLocationDot } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'
import logo from '../../public/assets/logo.png'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer_page">
                    <div className='footer_page_container'>
                        <div className="footer_page-left">
                            <div className="footer_page-left-top">
                                <h1>Контакты</h1>
                                <div className='footer_page-left-container'>
                                    <div className='footer_page-left-box'>
                                        <div className="footer_page_left-svg">
                                            <FaLocationDot />
                                        </div>
                                        <p>г.Ташкент, Чиланзар <br />
                                            10 квартал, дом 3/1</p>
                                    </div>
                                    <div className='footer_page-left-box'>
                                        <div className="footer_page_left-svg">
                                            <IoCall />
                                        </div>
                                        <p><a href="tel:+998 71 276-62-53">+998 71 276-62-53</a>
                                            <br />
                                            <a href="tel:+998 71 276-62-54">+998 71 276-62-54</a></p>
                                    </div>
                                    <div className='footer_page-left-box'>
                                        <div className="footer_page_left-svg">
                                            <AiOutlineMail />
                                        </div>
                                        <p>info@medol.uz  </p>
                                    </div>
                                    <button>Оставить заявку</button>
                                </div>
                            </div>
                            <div className="footer_page-left-bottom">
                                <Image src={logo} />
                                <p>Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.</p>
                            </div>
                        </div>
                        <div className="footer_page-right">
                            <div className="first_footer_page">
                                <h1>О компании</h1>
                                <ul className='first_footer_container'>
                                    <li>
                                        История
                                    </li>
                                    <li>
                                        Партнеры
                                    </li>
                                    <li>
                                        Вакансии

                                    </li>
                                </ul>
                            </div>
                            <div className="first_footer_page">
                                <h1>Продукция</h1>
                                <ul className='first_footer_container'>
                                    <li>
                                        Эндоваскулярная хирургия
                                    </li>
                                    <li>
                                        Аритмология
                                    </li>
                                    <li>
                                        Кардиохирургия
                                    </li>
                                    <li>Лабораторная диагностика
                                    </li>
                                    <li>Хирургия
                                    </li>
                                    <li>Эндоурология
                                    </li>
                                    <li>Нейрохирургия
                                    </li>
                                    <li>Анестезиология и реанимация
                                    </li>
                                    <li>Диабет</li>
                                </ul>
                            </div>
                            <div className="first_footer_page">
                                <h1>Услуги</h1>
                                <ul className='first_footer_container'>
                                    <li>
                                        Сервис
                                    </li>
                                    <li>
                                        Регистрации
                                    </li>
                                    <li>
                                        Услуги логистики
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer_page-links">
                        <p>© 2021 ООО «Medical Online Services»</p>
                        <p>Дизайн сделан: <span>damingues92@gmail.com</span></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
