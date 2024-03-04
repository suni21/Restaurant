// src/components/RestaurantList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantCard from './RestaurantCard';

const RestaurantList = () => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:3000/restaurant');
        setRestaurant(response.data.restaurant); 
      } catch (error) {
        console.error('Error fetching restaurants', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="restaurant-list">
      {restaurant.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
