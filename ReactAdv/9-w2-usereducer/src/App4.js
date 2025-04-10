//Create your own custom hook, usePrevious

import { useState, useEffect, useRef } from "react";

export default function App() {
  const [day, setDay] = useState(getCurrentDayName);
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Saturday")
    }  else if (day === "Saturday") {
        setDay("Sunday")
    }  else if (day === "Sunday") {
        setDay("Monday")
    }
  }
  return (
    <div className="App" style={{padding: "10px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}


function usePrevious(val) {
    const ref = useRef();
    useEffect(() => {
        ref.current = val;
    },[val]);
    return ref.current;
}

function getCurrentDayName() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    return days[now.getDay()];
  }
  