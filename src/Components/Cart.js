import React,{useContext , useState , useRef , useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import {DataContext} from './DataProviders'
import DetailThumb from './DetailThumb';

export default function Cart() {
    const value = useContext(DataContext);
    const [cart , setCart] = value.cart;

    const [total , setTotal] = useState(0);
    useEffect(()=>{
        const getTotal = ()=>{
            const res = cart.reduce((prev , item)=>{
                return prev + (item.price * item.count)
            }, 0);
            setTotal(res)
        }
        getTotal();
    },[cart])
    const reducion = id =>{
        cart.forEach(item => {
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        setCart([...cart])
    }
    const increasion = id =>{
        cart.forEach(item => {
            if(item._id === id){
                item.count +=1;
            }
        })
        setCart([...cart])
    }
    const removeItem = id =>{
        if(window.confirm("You want to delete this !")){
            cart.forEach((item,index)=>{
                if(item._id === id){
                    cart.splice(index,1)
                }
                setCart([...cart])
            })
        }
    }
    if(cart.lenth === 0) return <h2 >No Product in Cart</h2>
    return (
        <>
            {
                cart.map(product => (
                    
                    <div className="details cart" key = {product._id}>
                        <div className="img-container" 
                        style = {
                            {
                                backgroundImage: `url(${product.images[0]})`,
                            }}
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

                            <div className="amount">
                                <button onClick={()=>reducion(product._id)}>-</button>
                                <span>{product.count}</span>
                                <button onClick={()=> increasion(product._id)}>+</button>
                            </div>
                            <div className="del" onClick={()=>removeItem(product._id)}>x</div>
                        </div>
                    </div>
                ))
            }
            <div className="total">
                <h3>Total: ${total}</h3>
                <Link to="/payment">Payment</Link>
            </div>
        </>
    )
}
