import { useReducer } from "react";
import App from "./App";

const reducer = (state, action) => {

    if (action.type === 'ride') return {money: state.money + 10};

    if (action.type === 'fuel') return {money: state.money - 10};

    return new Error();
}

function App2() {

    const initialState = {money: 100};
    const [state,dispatch] = useReducer(reducer,initialState);

    return (
        <div className="App">
            <h1>Wallet: {state.money}</h1>
            <div>
                <button onClick={() => dispatch({type:'ride'})}>
                    A new customer!</button>
                <button onClick={() => dispatch({type:'fuel'})}>
                Refill the tank!</button>
            </div>
        </div>
    );
}

export default App2;