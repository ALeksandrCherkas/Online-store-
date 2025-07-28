import Header from "../header"
import Footer from '../footer'
import FollowUs from '../homePage/followUs'
import ShoppingList from '../shoppingBag/shoppingList'

function ShopBag(){
    return (
        <>
            <section className='header'>
                <Header></Header>
            </section>

            <section className="shoppingList">
                <ShoppingList></ShoppingList>
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

export default ShopBag