import { useParams, useLocation } from "react-router-dom"
import Header from '../header'
import Footer from '../footer'
import Hero from '../homePage/hero'
import { CartContext, CartProvider } from "../context/cartContext"
import { useContext } from "react"
import { useState } from "react"

function ProductPage(){

    const location = useLocation();
    const product = location.state?.product;
    const {addToCart} = useContext(CartContext);  
    const [itemCount, setItemCount] = useState(0);
    return (
        <>
            <section className='header'>
                <Header></Header>
            </section>
            <section className='hero'>
                <Hero></Hero>
            </section>

            <section className="product">
                <div className="product__wrapper">
                    <div className="product__slider">
                        <img src={product.image} alt="" />
                    </div>

                    <div className="product__text-block">
                        <div className="product__text-block__title">
                            <h3>{product.title.split(' ').slice(0, 5).join(' ')}</h3>
                            <div className="product__raiting">
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                            </div>
                        </div>
                        <hr />
                        <p className="product__text-block-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rem praesentium necessitatibus a incidunt, nesciunt minus omnis reprehenderit at velit?</p>
                        <hr />
                        <div className="product__text-block__color-select">
                            <button className="color1"></button>
                            <button className="color2"></button>
                            <button className="color3"></button>
                            <button className="color4"></button>

                        </div>
                        <hr />
                        <div className="product__text-block__price">
                            <h3><span>{product.price}</span> {`$${Math.round(product.price * 0.8)}`}</h3>
                            <div className="product__text-block__count">
                                <button onClick={()=> {
                                        if(itemCount>0){
                                            setItemCount(itemCount -1);
                                        }
                                    }   
                                }>-</button>
                                <span>|</span>
                                <p>{itemCount}</p>
                                <span>|</span>
                                <button onClick={()=>{
                                        setItemCount(itemCount+1)
                                    }     
                                }>+</button>
                            </div>
                            <button className="addToCart" onClick={
                               ()=> addToCart(product, itemCount)
                               }>Add to cart</button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className='footer'>
                <Footer></Footer>
            </footer>
        </>
    );
}

export default ProductPage