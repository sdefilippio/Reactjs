import React from 'react';
import PropTypes from 'prop-types'; 

const CardPizza = ({ imgSrc, title, price }) => {
  return (
    <div className="card-pizza">
      <img src={imgSrc} alt={`Imagen de ${title}`} /> {/* Mejora de accesibilidad */}
      <h3>{title}</h3>
      <p>${price}</p>
      <button>Añadir al Carrito</button>
    </div>
  );
};


CardPizza.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CardPizza;
