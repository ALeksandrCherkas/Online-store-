import mainImg from '../../assets/images/backgrounds/portret-molodoi-zensiny-v-cernoi-nepovorotlivoi-slape-na-beloi-stene.jpg'
import woman1 from '../../assets/images/backgrounds/woman-8257060_1280.jpg'
import woman2 from '../../assets/images/backgrounds/fashion-1623085_1280.jpg'

function forHer(){
    return (
        <div className="forHer__wrapper">
            <div className="forHer__wrapper-block1">
                <h1>For Her. For Now.</h1>
                <img src={mainImg} alt="" />
                <button>show more</button>
            </div>
            <div className="forHer__wrapper-block2">
                <h3>Street-inspired looks that break the rules. Bold prints, oversized layers, and attitude.</h3>
                <div className="forHer__wrapper-block2--imgBlock">
                    <img src={woman1} alt="" className='img1'/>
                    <img src={woman2} alt="" className='img2'/>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default forHer