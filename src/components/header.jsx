import { NavLink, Link } from 'react-router-dom';
import profileIcon from '../assets/images/icons/profile_user_icon_151793.svg'
import cartIcon from '../assets/images/icons/online_store_sale_cart_business_ecommerce_basket_bag_buy_shop_shopping_icon_259583.svg'


function Header(){
    return(
        <>
            <div className="header__wrapper">
                <div className="header__wrapper-logo">Logo</div>
                <div className="header__wrapper-links">

                    <NavLink to="/home" className={({ isActive }) => isActive ? '--active' : ''}>
                    Home
                    </NavLink>
                    <NavLink to="/shop" className={
                        ( {isActive}) => isActive ? '--active' : ''
                        }>Shop</NavLink>
                    <a href="#">About us</a>
                    <a href="#">Contact</a>
                </div>
                <div className="header__wrapper-icons">

                    <Link to="/bag">
                        <button ><img src={cartIcon} width='45px' height='45px' alt="" /></button>
                    </Link>
                    <button><img src={profileIcon} width='45px' height='45px' alt="" /></button>
                    
                </div>
                <hr />
            </div>
        
        </>
    )
}
export default Header