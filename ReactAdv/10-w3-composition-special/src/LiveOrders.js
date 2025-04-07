import * as React from "react";
import "./App.css";

const Row = ({children,spacing}) => {

    const childStyle = {
        marginLeft: `${spacing}px`,
    };    
    
    return (
        <div className="Row">
            {React.Children.map(children,(child,index) =>{
                return React.cloneElement(child,{
                    style: {
                        ...child.props.style,
                        ...(index > 0 ? childStyle : {}),
                    },
                });
            })}
        </div>
    );
};

function LiveOrders (){
    return(
        <div className="App">
            <Row spacing={32}>
                <span>Pizza Margarita</span>
                <span>2</span>
                <span>30$</span>
                <span>18:30</span>
                <span>John</span>
            </Row>
        </div>
    );
};

export default LiveOrders