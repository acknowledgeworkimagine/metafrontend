
import './App.css';
import {useState} from 'react';

export default function App() {
  //[destrucured variable1, destructured variable2]
  const [restaurantName,setRestaurantName] = useState("Lemon");
  

  const updateRestaurantName = () => {
    setRestaurantName("Little Lemon")
  };

  return (
    <div className='appset'>
        <h1>{restaurantName}</h1>
        <button onClick={updateRestaurantName}>
            Update restaurant name
        </button>
    </div>
  );

};