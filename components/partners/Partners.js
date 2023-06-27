import Image from 'next/image'
import React from 'react'
import './Partners.css'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6'
import image1 from '../../public/assets/partners/1.png'
import image2 from '../../public/assets/partners/2.png'
import image3 from '../../public/assets/partners/3.png'
import image4 from '../../public/assets/partners/4.png'
import image5 from '../../public/assets/partners/5.png'
import image6 from '../../public/assets/partners/6.png'
import image7 from '../../public/assets/partners/7.png'
import image8 from '../../public/assets/partners/8.png'



const Partners = () => {
    return (
        <section className='partner'>
            <div className="container">
                <div className="partners_page">
                    <h1>ПАРТНЕРЫ</h1>
                    <div className="partners_page_container">
                        <div className="partners_page_box">
                            <Image src={image1} />
                        </div>
                        <div className="partners_page_box">
                            <Image src={image2} />
                        </div> <div className="partners_page_box">
                            <Image src={image3} />
                        </div> <div className="partners_page_box">
                            <Image src={image4} />
                        </div> <div className="partners_page_box">
                            <Image src={image5} />
                        </div> <div className="partners_page_box">
                            <Image src={image6} />
                        </div>
                        <div className="partners_page_box">
                            <Image src={image7} />
                        </div>
                        <div className="partners_page_box">
                            <Image src={image8} />
                        </div>
                        <div className="partner_page-right">
                            <FaChevronRight />
                        </div>
                        <div className="partner_page-left">
                            <FaChevronLeft />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Partners
