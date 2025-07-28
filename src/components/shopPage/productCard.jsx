import { Link } from "react-router-dom"


function card ({product}) {
    
    return(
        <div className="card">
            <img src={product.image} alt={product.title} />
            <p className="card__title">{
            product.title.split(' ').slice(0, 3).join(' ')
            }</p>
            <div className="card__raiting">
                {
                    Array(5).fill(0).map((item, index)=>(
                        
                        <span className={index < Math.floor(product.rating.rate) ? 'full' : 'half'}>&#9733;</span>
                    ))
                    //console.log(Math.floor(product.rating.rate))
                    //console.log(product.rating.rate)
                
                }
                <p>({product.rating.count})</p>
            </div>
            <div className="card__price-block">
                <p className="card__price-block__price">{
                '$' + product.price
                }</p>
                <Link to={`/product/${product.id}`} state={{product}}>Buy</Link>
            </div>
            
        </div>
    )
}
export default card