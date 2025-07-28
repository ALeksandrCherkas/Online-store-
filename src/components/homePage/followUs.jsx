import image1 from '../../assets/images/backgrounds/643cb8d878fb056749457333b8bf81fb.jpg'
import image2 from '../../assets/images/backgrounds/fa05e8591dd28576c8c92f61e6486db2.jpg'
import image3 from '../../assets/images/backgrounds/5c68d9d8567e48ec1360e3bbf29e6d34.jpg'
import image4 from '../../assets/images/backgrounds/9e21897bd41ae1f0ef0349c3d52e158b.jpg'
import image5 from '../../assets/images/backgrounds/51f71563e44829360002ca0bda2ca678.jpg'




function followUs(){
    return (
        <div className="followUs__wrapper">
            <h1>Follow us on Instagram</h1>
            <p>Discover outfit inspo, behind-the-scenes, and limited drops on our IG.</p>
            <div className="followUs__wrapper__imgBlock">
                <img src={image1} alt=""/>
                <img src={image2} alt=""/>
                <img src={image3} alt=""/>
                <img src={image4} alt=""/>
                <img src={image5} alt=""/>
            </div>
            <hr />
            <div className="followUs__wrapper__emailBlock">
                <div className="followUs__wrapper__emailBlock__text">
                    <h1>Subscribe To Our Newsletter</h1>
                    <p>We’ll send you only the good stuff — no spam, just style.</p>
                </div>
                <div className="followUs__wrapper__emailBlock__input">
                    <input type="text" placeholder='Enter Email'/>
                    <button>send</button>
                </div>

            </div>
        </div>
    )
}
export default followUs