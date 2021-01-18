import React,{useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from './DataProviders'
function Header() {
  const [menu , setMenu] = useState(false)
  const toogle = () => {
    setMenu(!menu)
  }
  const value = useContext(DataContext).cart;
    return (
        <header>
            <div className="menu" onClick = {toogle}>
            <img src="/svg/bars-solid.svg" alt="" width="30"/>
            </div>
            <div className="logo">
              <h2><Link to="/">Pokemon</Link></h2>
            </div>
            <ul style={{left: menu ? 0 : "-100%"}}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dex">DexCard</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Login/Register</Link></li>
              <li onClick = {toogle}><img src="/svg/times-solid.svg" alt="" width="30" className="menu"/></li>
            </ul>
            <Link to="/cart">
            <div className="cart-icon">
              <span>{value[0].length}</span>
              <img src="/svg/cart-plus-solid.svg" alt="" width="30"/>
            </div>
            </Link>

      </header>
    )
}

export default Header
