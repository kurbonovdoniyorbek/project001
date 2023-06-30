"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'
import doctors from '../../public/assets/news/doctors.png'
import React from 'react'
import './News.css'
import { BiRightArrowCircle } from 'react-icons/bi'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";

const News = () => {
    return (
        <section className='news'>
            <div className="container">
                <div className="news_page">
                    <h1>НОВОСТИ</h1>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={5}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            "@0.75": {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            "@1.00": {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            "@1.50": {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image src={doctors} />
                            <Link href={"/"}>
                                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
                            </Link>
                            <h6>26.07.2021</h6>
                            <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                            <button>Подробнее</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={doctors} />
                            <Link href={"/"}>
                                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
                            </Link>
                            <h6>26.07.2021</h6>
                            <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                            <button>Подробнее</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={doctors} />
                            <Link href={"/"}>
                                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
                            </Link>
                            <h6>26.07.2021</h6>
                            <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                            <button>Подробнее</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={doctors} />
                            <Link href={"/"}>
                                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
                            </Link>
                            <h6>26.07.2021</h6>
                            <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                            <button>Подробнее</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={doctors} />
                            <Link href={"/"}>
                                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
                            </Link>
                            <h6>26.07.2021</h6>
                            <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                            <button>Подробнее</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={doctors} />
                            <Link href={"/"}>
                                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
                            </Link>
                            <h6>26.07.2021</h6>
                            <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                            <button>Подробнее</button>
                        </SwiperSlide>
                    </Swiper>


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
