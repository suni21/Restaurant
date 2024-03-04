// src/components/RestaurantCard.js
import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <h2>{restaurant.name}</h2>
      <p>{restaurant.location.address}</p>
      <p>Chef: {restaurant.chef.name}</p>
      <p>Bio: {restaurant.chef.bio} </p>
      <p>Signature Dish: {restaurant.chef.signature_dish}</p>
      <p>Awards</p>
      <p> {restaurant.awards} </p>
      {/* Add more details as needed */}
    </div>
  );
};

export default RestaurantCard;
