
import './App.css';
import {useState} from 'react';

export default function App() {
  //[destrucured variable1, destructured variable2]
  const [restaurantName,setRestaurantName] = useState("Lemon");
  console.log(restaurantName);
  return (
    <div className='appset'>
      <h1>{restaurantName}</h1>
    </div>
    
  );
};