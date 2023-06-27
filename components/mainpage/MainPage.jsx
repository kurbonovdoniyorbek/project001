"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import img from '../../public/assets/mainpage/mainpage_picture.png'
import './MainPage.css'



const MainPage = () => {
    const [select, setSelect] = useState(0)
    return (
        <section className='main_page'>
            <div className="container">
                <Header />
                <Navbar />
                <div className="main_page_container">
                    <div className="main_page_left">
                        <h6 className='hello'>Анализатор <br />
                            ABL800 FLEX</h6>
                        <p>Ориентированный на среднюю или высокую <br />
                            производительность тестов, анализатор ABL800 FLEX <br />
                            измеряет полный набор параметров, включая pH, газы <br />
                            крови, электролиты, метаболиты и показатели оксиметрии</p>
                        <button>Подробнее</button>
                    </div>
                    <div className="main_page_right">
                        <div className="main_page-right-background">
                            <Image src={img} />
                            {/* (data[select]) or (map index // setSelect(index)) */}
                        </div>
                    </div>
                </div>
                <div className="main_page_swiper">
                    <div className={`main_page_swiper_round ${select === 0 ? "active" : ""}`}
                        onClick={() => setSelect(0)}
                    >

                    </div>
                    <div className={`main_page_swiper_round ${select === 1 ? "active" : ""}`}
                        onClick={() => setSelect(1)}>

                    </div><div className={`main_page_swiper_round ${select === 2 ? "active" : ""}`}
                        onClick={() => setSelect(2)}>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainPage
