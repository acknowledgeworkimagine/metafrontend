import React from "react";

//Captures a new goal usign a form

function GoalForm(props) {
    const [formData, setFormData] = React.useState({goal:"", by:""})

    function changeHandler(e) {
        setFormData({...formData, [e.target.name]:e.target.value});
    };

    function submitHandler(e) {
        e.preventDefault();
        props.onAdd(formData);
        setFormData({goal:"", by:""});
    };

    return (

        <div className="appset">
            <h1>My Little Lemon Goals</h1>
            <form onSubmit={submitHandler}>
                <input type="text"
                name="goal"
                placeholder="Goal"
                value={formData.goal}
                onChange={changeHandler}
                />
                <input type="text"
                name="by"
                placeholder="By..."
                value={formData.by}
                onChange={changeHandler}
                />
                <button>Submit Goal</button>
            </form>
        </div>

    );


}

/*Loops over all the previously. added goals and displays them
as an unordered list of list items*/

function ListOfGoals(props) {
    return(
        <ul>
        {props.allGoals.map((g) => (
            <li key={g.goals}>
                <span>My goal is to {g.goal}, by {g.by}</span>
            </li>
        ))}
        </ul>
    )
}

/*Puts those two components together and allows me to render them
as well as pass the functions that they will be working throu their props*/

export default function App3() {

    const [allGoals, updateAllGoals] = React.useState([]);

    function addGoal(goal) {
        updateAllGoals([...allGoals, goal]);
    };

    return (
        <div>
            <GoalForm onAdd={addGoal} />
            <ListOfGoals allGoals={allGoals} />
        </div>
    );
}
