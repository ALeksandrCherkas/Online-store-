import ShoeFirst from '../../assets/images/backgrounds/ShoeFirst.jpg'
import ShoeSecond from '../../assets/images/backgrounds/ShoeSecond.jpg'
import ShoeThird from '../../assets/images/backgrounds/ShoeThird.jpg'

function Shoes(){
    return(

        <div className="shoes__wrapper">
            <div className="shoes__wrapper-text">
                <h1>Step into Style: New Shoe Collection</h1>
                <h3>Minimalist designs. Maximum comfort. Discover this season’s most versatile styles, crafted for everyday movement.</h3>
                <button>browse</button>
            </div>
            <img src={ShoeFirst} alt="" className='shoes__wrapper-img shoes__wrapper-img--img1'/>
            <img src={ShoeSecond} alt="" className='shoes__wrapper-img shoes__wrapper-img--img2'/>
            <img src={ShoeThird} alt="" className='shoes__wrapper-img shoes__wrapper-img--img3'/>
        </div>
    )
}

export default Shoes