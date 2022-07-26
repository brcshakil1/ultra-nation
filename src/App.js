import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './component/Country/Country';
import Cart from './component/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        const names = data.map(country => country.name);
      })
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart)
  };

  return (
    <div className="App">
      <h1>Country loaded: {countries.length}</h1>
      <h4>Country added : {cart.length}</h4>
      <Cart cart ={cart}></Cart>
        {
          countries.map(country => <Country country ={country} handleAddCountry ={handleAddCountry} key ={country.flag}></Country>)
        }
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
