import Image from '../../assets/images/products/bagPicture.jpg';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { useState } from 'react';
function shoppingList(){

    const {cartItems, removeFromCart, updateQuantity} = useContext(CartContext);
    return (
        <div className="shoppingList__wrapper">
            <h1>Shopping bag</h1>
            <div className="shoppingList__wrapper__list">


                {cartItems.map(item=>(
                    <div className="shoppingList__wrapper__list__item">
                    <div className="shoppingList__wrapper__list__item__img">
                        <img src={item.image} alt="" />
                    </div>

                    <div className="shoppingList__wrapper__list__item__text">
                        <h3>{item.title}</h3>
                        <p>Type: <span>{item.category}</span></p>
                        <div className="shoppingList__wrapper__list__item__text__price-block">
                            <h3>{`$${item.price*item.quantity}`}</h3>
                            <div className="item-count">
                                <button onClick={()=>{
                                    if(item.quantity > 1){
                                        updateQuantity(item.id, item.quantity - 1)
                                    } else if (item.quantity === 1){
                                        removeFromCart(item.id)
                                    }
                                }}>-</button>
                                <span>|</span>
                                <p>{item.quantity}</p>
                                <span>|</span>
                                <button onClick={()=>{
                                    updateQuantity(item.id, item.quantity + 1)
                                }

                                }>+</button>
                                {console.log(item)}
                            </div>
                        </div>
                    </div>
                    <button className='removeFromCart' onClick={() => removeFromCart(item.id)}>x</button>
                </div>
                ))}
                



            </div>
            <div className="shoppingList__wrapper__order">
                <div className="shoppingList__wrapper__order__container">
                    <h2>Order summary</h2>
                    <p>items in cart: <span>0</span></p>
                    <p>Shipping:<span>0</span></p>
                    <p>Subtotal: <span>0</span></p>
                    <p>Total: <span>0</span></p>

                    <div className="terms">
                        <input type="checkbox" />
                        <p>I agree with terms and Conditions</p>
                    </div>
                    <button>Continue</button>
                </div>  
            </div>
        </div>
    )
}

export default shoppingList