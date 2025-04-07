import './App.css';
import {useState} from "react";

const ToDo = props => (
  <tr>
    <td>
      <label> {props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

function App() {
  const [todos,setTodos] = useState(
    [
      {
        id: 'todo1',
        createdAt:'18:00'
      },
      {
        id: 'todo2',
        createdAt:'20:30'
      }
    ]
  );

  const reverseOrder = () => {
    //Reverse is a mutative operation, so we need  to create a new arraw first
    setTodos([...todos].reverse());
  }

  // In short, to avoid confusion and ensure consistent behavior, it’s usually best to use a stable, 
  // unique identifier for keys (e.g., a database ID). If such an ID isn’t available, you can generate one, 
  // but relying on the array index should be a last resort.

  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo) => (
            <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
