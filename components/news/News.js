import Image from 'next/image'
import Link from 'next/link'
import doctors from '../../public/assets/news/doctors.png'
import React from 'react'
import './News.css'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6'
import { BiRightArrowCircle } from 'react-icons/bi'

const News = () => {
    return (
        <section className='news'>
            <div className="container">
                <div className="news_page">
                    <h1>НОВОСТИ</h1>
                    <div className="news_page_container">
                        <div className="news_page_box">
                            <Image src={doctors} />
                            <Link href={"/"}>
                                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
                            </Link>
                            <h6>26.07.2021</h6>
                            <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                            <button>Подробнее</button>
                        </div>
                        <div className="news_page_box">
                            <Image src={doctors} />
                            <Link href={"/"}>
                                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
                            </Link>
                            <h6>26.07.2021</h6>
                            <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                            <button>Подробнее</button>
                        </div>
                        <div className="news_page_box">
                            <Image src={doctors} />
                            <Link href={"/"}>
                                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
                            </Link>
                            <h6>26.07.2021</h6>
                            <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                            <button>Подробнее</button>
                        </div>
                        <div className="news_page-right">
                            <FaChevronRight />
                        </div>
                        <div className="news_page-left">
                            <FaChevronLeft />
                        </div>
                    </div>
                    <div className="news_page-links">
                        <Link href={"/"}>
                            Посмотреть все новости <BiRightArrowCircle />
                        </Link>
                        <Link href={"/"}>
                            Подписаться на новости <BiRightArrowCircle />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News
