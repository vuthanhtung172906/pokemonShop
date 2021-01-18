import React from 'react';
import Header from './Components/Header'
import Dex from './Components/Dex'
import Details from './Components/Details'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import {DataProviders} from './Components/DataProviders'
import Cart from './Components/Cart';

const App = () => {
  return (
    <DataProviders>
    <div className="App">
      <Router>
        <Header/>
        <section>
          <Routes >
            <Route path="dex" element={<Dex/>}/>
            <Route path="dex/:id" element={<Details/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Dex/>
          </Routes>
        </section>
      </Router>

    </div>
    </DataProviders>
  );
}

export default App;
