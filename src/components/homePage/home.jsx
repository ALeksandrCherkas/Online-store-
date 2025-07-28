import Hero from './hero'
import Header from '../header'
import Shoe from './shoes'
import ForHer from './forHer'
import ForHim from './forHim'
import FollowUs from './followUs'
import Footer from '../footer'


function Home() {
    return (
        <>
            <section className='header'>
                <Header></Header>
            </section>
            <section className='hero'>
                <Hero></Hero>
            </section>

            <section className='shoes'>
                <Shoe></Shoe>
            </section>

            <section className='forHer'>
                <ForHer></ForHer>
            </section>

            <section className='forHim'>
                <ForHim></ForHim>
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


export default Home