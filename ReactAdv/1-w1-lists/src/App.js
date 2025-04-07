import './App.css';

//Date for exercise 1
const data = [
  {
    id:"1",
    title:"Tiramisu",
    description:"The best tiramisu in town",
    image:"https://picsum.photos/200/300?random",
    price:"$5.00",
  },
  {
    id:"2",
    title:"Lemon Ice Cream",
    description:"Mind blowing taste",
    image:"https://picsum.photos/200/300?random",
    price:"4.50",
  },
  {
    id:"3",
    title:"Chocolate mousse",
    description:"Unexplored flavour",
    image:"https://picsum.photos/200/300?random",
    price:"6.00",
  },
];

//Date for exercise 2
const topDessert = [
  {
    id:"1",
    title:"Tiramisu",
    description:"The best tiramisu in town",
    image:"https://picsum.photos/200/300?random",
    price:"$5.00",
  },
  {
    id:"2",
    title:"Lemon Ice Cream",
    description:"Mind blowing taste",
    image:"https://picsum.photos/200/300?random",
    price:"$4.50",
  },
  {
    id:"3",
    title:"Chocolate mousse",
    description:"Unexplored flavour",
    image:"https://picsum.photos/200/300?random",
    price:"$6.00",
  },
];

//Exercise 1
const topDesserts = data.map(dessert => {
  return {
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.price,
  }
})

function App() {

  //Exercise 2
  const listItems =topDessert.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`
    return <li>{itemText}</li>
  })

  console.log(topDesserts); //Exercise 1
  
  //Exercise 2
  return (
   <div>
    <h1>Examine the console output</h1>
    <ul>
      {listItems}
    </ul>
   </div>
  );
}

export default App;
