import image1 from '../../assets/images/backgrounds/6f669a3ea20e17a26006219b10469271.jpg'
import image2 from '../../assets/images/backgrounds/muzcina-v-pustoi-rubaske.jpg'
import mainImg from '../../assets/images/backgrounds/portrait-handsome-serious-hipster-businessman-model-wearing-casual-black-suit_158538-978.jpg'




function forHim(){
    return(
        <div className="forHim__wrapper">
            <div className="forHim__wrapper__block1">
                <h3>Built for movement, made to stand out. Clean lines, bold cuts, and off-duty energy.</h3>
                <div className="forHim__wrapper__block1__imgBlock">
                    <img src={image2} alt="" className='forHim__wrapper__block1__imgBlock-img1'/>
                    <img src={image1} alt="" className='forHim__wrapper__block1__imgBlock-img2'/>
                </div>
            </div>

            <div className="forHim__wrapper__block2">
                <h1>For Him. For Real.</h1>
                <img src={mainImg} alt=""/>
                <button>show more</button>
            </div>
            <hr />
        </div>
    )
}

export default forHim