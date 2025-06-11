

import { useState} from 'react';
import './App.css';
import { Header } from './components/Header';
import { Product } from './components/Product';
import { Footer } from './components/Footer';

function App() {
  


  const [cartItems ,setCartItems]=useState([]);

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.map((item) => item.id !== id ? 
    {...item, quantity:item.quantity -1}:item).filter((item)=> item.quantity >0));
  };


  const addToCArt=(product)=>{
    setCartItems((prevItems)=>{
      const existingItem=prevItems.find((item)=>item.id==product.id);
      if(existingItem){
        return prevItems.map((item)=>
        item.id===product.id ? {...item,quantity: item.quantity +1 }: item);
      }
      return [...prevItems,{...product ,quantity:1}];
    });
    setCartItems([...cartItems, product]);
  };

  

  
  return (
   <div >
    <Header cartItems={cartItems} onRemove={removeFromCart}/>
    <Product onAddToCart={addToCArt}/>
    <Footer/>
   </div>
  );
}

export default App
