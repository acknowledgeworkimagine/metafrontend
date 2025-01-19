
function Fruits(props) {

    return (
        <div>
            <h5>{props.fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}</h5>
        </div>
    )
}

export default Fruits;