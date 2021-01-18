import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from './DataProviders'

function Dex() {

    const value = useContext(DataContext);
    const [dex] = value.dex;
    const [addCart] = value.addCart;
    return (
        <div className="dex">
          {
            dex.map((card,index)=> (
              <div className="card" key ={index}>
              <Link to={`/dex/${card._id}`}><img src={card.images[0]} alt=""/></Link>
              <div className="box">
                <h3 title={card.title}>
                  <Link to={`/dex/${card._id}`}>{card.title}</Link>
                </h3>
                <p>{card.description}{card.description}</p>
                <h4>${card.price}</h4>
                <button onClick={()=>{addCart(card._id)}}>Add to card</button>
              </div>
            </div>
            ))
          }

        </div>
    )
}

export default Dex
