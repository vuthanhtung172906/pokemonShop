import React,{useContext , useState , useRef} from 'react'
import {useParams,Link} from 'react-router-dom'
import {DataContext} from './DataProviders'
import DetailThumb from './DetailThumb';

export default function Details() {
    const {id} = useParams();
    const value = useContext(DataContext);
    const details = value.dex[0].filter(card => {
        return card._id === id;
    });
    const [addCart] = value.addCart;
    const myref = useRef();
    const handleMouseMove = e =>{
        const {left , top , width, height}=(e.target.getBoundingClientRect());
        const x = (e.pageX - left) / width*100;
        const y = (e.pageY - top) / height*100;
        myref.current.style.backgroundPosition = `${x}% ${y}%`
    }
    const [index , setIndex] = useState(0)
    return (
        <>
            {
                details.map(product => (
                    
                    <div className="details" key = {product._id}>
                        <div className="img-container" 
                        style = {
                            {
                                backgroundImage: `url(${product.images[index]})`,
                            }}
                        onMouseMove = {handleMouseMove}
                        onMouseLeave = {()=>{myref.current.style.backgroundPosition = 'center'}}
                        ref={myref}
                        />
                        <div className="box-details">
                            <h2 title={product.title}>{product.title}</h2>
                            <h3>${product.price}</h3>
                            <div className="color">
                                {
                                    product.colors.map((color , index) =>(
                                        <button key={index} style={{background: color}}></button>
                                    ))
                                }
                            </div>
                            <div className="sizes">
                                {
                                    product.sizes.map((size , index) =>(
                                       <button key={index}>{size}</button>
                                    ))
                                }
                            </div>
                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            <DetailThumb item = {product} setThumb = {setIndex}/>
                            <Link to="/cart">
                            <button className="cart" onClick={()=>{addCart(product._id)}}>Add to Card</button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
