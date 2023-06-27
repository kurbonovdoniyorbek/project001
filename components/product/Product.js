import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import picture1 from "../../public/assets/productpage/endeavor.png"
import picture2 from '../../public/assets/productpage/product2.png'
import picture5 from '../../public/assets/productpage/product5.png'
import picture6 from '../../public/assets/productpage/product6.png'
import picture3 from '../../public/assets/productpage/product3.png'
import picture4 from '../../public/assets/productpage/product4.png'



import { BiRightArrowCircle } from 'react-icons/bi'
import './Product.css'

const Product = () => {
    return (
        <section className='product_page'>
            <div className='container'>
                <div className="product_container">
                    <h3>ПРОДУКЦИЯ</h3>
                    <div className="product_container-collection">
                        <div className="product_page-box">
                            <Image src={picture1} alt="" />
                            <p>Эндоваскулярная <br />
                                хирургия</p>
                            <button>Посмотреть все</button>
                        </div>
                        <div className="product_page-box">
                            <Image src={picture2} alt="" />
                            <p>Эндоваскулярная <br />
                                хирургия</p>
                            <button>Посмотреть все</button>
                        </div>
                        <div className="product_page-box">
                            <Image src={picture5} alt="" />
                            <p>Эндоваскулярная <br />
                                хирургия</p>
                            <button>Посмотреть все</button>
                        </div>
                        <div className="product_page-box">
                            <Image src={picture6} alt="" />
                            <p>Эндоваскулярная <br />
                                хирургия</p>
                            <button>Посмотреть все</button>
                        </div>
                        <div className="product_page-box">
                            <Image src={picture4} alt="" />
                            <p>Эндоваскулярная <br />
                                хирургия</p>
                            <button>Посмотреть все</button>
                        </div>
                        <div className="product_page-box">
                            <Image src={picture3} alt="" />
                            <p>Эндоваскулярная <br />
                                хирургия</p>
                            <button>Посмотреть все</button>
                        </div>
                    </div>
                    <Link className='product_page-link' href={"/"}>
                        Перейти в каталог нашей продукции <BiRightArrowCircle />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Product
