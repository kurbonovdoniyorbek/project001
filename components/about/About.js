import Image from 'next/image'
import React from 'react'
import image from '../../public/assets/about/logorounded.png'
import './About.css'

const About = () => {
    return (
        <section className='about'>
            <div className='container'>
                <div className="about_page">
                    <h1 id='about'>О КОМПАНИИ</h1>
                    <div className="about_page_container">
                        <div className="about_page_img">
                            <Image src={image} />
                        </div>
                        <div className="about_page_text">
                            <p>
                                Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан.
                            </p>
                            <button>
                                Узнать больше
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
