import React from 'react';
import pizzaMargherita from '/src/assets/imgs/pizza.jpg';
import pizzaPepperoni from '/src/assets/imgs/pizza2.jpeg';
import pizzaVeggie from '/src/assets/imgs/pizza3.jpg';
import CardPizza from './CardPizza'; 
import './App.css'

const PizzaMenu = () => {
  return (
    <div className="pizza-menu">
      <CardPizza 
        imgSrc={pizzaMargherita} 
        title="Pizza Margherita" 
        price="15,990 CLP" 
      />
      <CardPizza 
        imgSrc={pizzaPepperoni}
        title="Pizza Pepperoni" 
        price="18,990 CLP" 
      />
      <CardPizza 
        imgSrc={pizzaVeggie}
        title="Pizza Veggie" 
        price="12,900 CLP" 
      />
    </div>
  );
};

export default PizzaMenu;

