
import './App.css';
/*Step0*/
import {useState} from "react";

function App() {
  /*Step1*/
  const [name,setName] = useState("");

  
  /*Step4*/ const handleSubmit = ( /*Step5*/e) => {

  /*Step5*/ e.preventDefault();
  /*Step6*/setName("");

  /*Step4*/ console.log('Form Submited')

  
  };

  return (
    <div className="App">
      <form /*Step3*/ onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label /*Step8*/ htmlFor="name">Name: </label> 
            <input 
            /*Step8*/id="name"
            type="text" 
            placeholder="Name" 
            name="name" 
            /*Step2*/ 
            value={name} onChange={e => setName(e.target.value)} 
            /> 
          </div>
          <button  /*Step7*/ disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
export default App;
