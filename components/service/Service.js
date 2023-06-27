import Image from 'next/image'
import React from 'react'
import service1 from "../../public/assets/service/service1.png"
import service2 from "../../public/assets/service/service2.png"
import service3 from "../../public/assets/service/service3.png"
import "./Service.css"

const Service = () => {
    return (
        <section className='service'>
            <h1 className='service_page_header_text'>УСЛУГИ</h1>
            <div className="service_page">
                <div className="container">
                    <div className="service_page-container">
                        <div className="service_page_box">
                            <div className="serive_page_box_img">
                                <Image src={service1} />
                            </div>
                            <h5>СЕРВИС ОБОРУДОВАНИЯ</h5>
                            <p>Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......</p>
                            <button>
                                Подробнее
                            </button>
                        </div>
                        <div className="service_page_box">
                            <div className="serive_page_box_img">
                                <Image src={service2} />
                            </div>
                            <h5>СЕРВИС ОБОРУДОВАНИЯ</h5>
                            <p>Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......</p>
                            <button>
                                Подробнее
                            </button>
                        </div>
                        <div className="service_page_box">
                            <div className="serive_page_box_img">
                                <Image src={service3} />
                            </div>
                            <h5>СЕРВИС ОБОРУДОВАНИЯ</h5>
                            <p>Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......</p>
                            <button>
                                Подробнее
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
