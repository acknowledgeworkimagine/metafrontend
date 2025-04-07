//useRef to access underlying DOM
import React from 'react';
import './App.css';


function App2() {

    const formInputRef = React.useRef(null);

    const focusInput = () => {
        formInputRef.current.focus();
    }

 return (
    <div className='App' style={{padding: "10px"}}>
        <h1>Using useRef to acces underlying DOM</h1>
        <input ref={formInputRef} type="text" />
        <button onClick={focusInput}>
            Focus Input
        </button>
    </div>
 );   
}

export default App2;

/*
<>
  {child components}
</>
is a shorthand for a React Fragment. 
A “fragment” in React is basically an 
invisible wrapper around multiple 
elements—without producing an extra 
DOM node (like a <div>). 
*/