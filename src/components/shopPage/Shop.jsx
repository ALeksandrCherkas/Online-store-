import Header from '../header'
import Hero from '../homePage/hero'
import Catalog from './catalog'
import Footer from '../footer'
import FollowUs from '../homePage/followUs'

function Shop(){
    return (
        <>
            <section className='header'>
                    <Header></Header>
            </section>
            <section className='hero'>
                <Hero></Hero>
            </section>
            <section className="catalog">
                <Catalog></Catalog>
            </section>
            <section className='followUs'>
                <FollowUs></FollowUs>
            </section>
            <footer className='footer'>
                <Footer></Footer>
            </footer>
        </>
    )
}   
export default Shop