import Card from './productCard'
import { useEffect, useState } from 'react'
const url = "https://fakestoreapi.com/products"


function catalog () {
    const [visibleCount, setVisibleCount ] = useState(6);
    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [category, setCategory] = useState('')

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then((result) => {
                setLoaded(true)
                setItems(result);
                
            })
            .catch((error)=> {
                setLoaded(true);
                setError(error);
            });
            
    }, []);
    const filteredItems = items.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredCategory = items.filter(item =>
        item.category.includes(category));
    const visibleItems = items.slice(0, visibleCount);
    return (
        <div className="catalog__wrapper">
                <div className="search__wrapper">
                    <h3>Lorem ipsum dolo</h3>
                    <input 
                        type="text" 
                        placeholder="Seacrh"
                        onChange={(e)=> setSearchTerm(e.target.value)}
                    />
                    <div className="search__wrapper__filter-block">
                        <button className="--active"
                            onClick={()=>{
                                setCategory("men's clothing")
                            }}
                        >For Men</button>
                        <button>For Women</button>
                        <button>Shoes</button>
                        <button>Accesories</button>
                    </div>
                    <hr />
                </div>
            <div className="catalog__wrapper__cards">
                {

                    (searchTerm === '' ? visibleItems : filteredItems).map(item =>(<Card product={item}></Card>))
                    //visibleItems.map(item =>(<Card product={item}></Card>)) 
                }
            </div>
            <button className='catalog__wrapper__showMore'
            onClick={
                () => setVisibleCount(prev => prev +6)
            }>Show more</button>
        </div>
    )
    
}

export default catalog