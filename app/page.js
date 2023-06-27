import MainPage from '@/components/mainpage/MainPage'
import Product from '@/components/product/Product'
import Service from '@/components/service/Service'
import About from '@/components/about/About'
import News from '@/components/news/News'
import './index.css'
import Partners from '@/components/partners/Partners'
import Footer from '@/components/footer/Footer'

const Home = () => {
    return (
        <>
            <MainPage />
            <Product />
            <Service />
            <About />
            <News />
            <Partners />
            <Footer />
        </>
    )
}

export default Home