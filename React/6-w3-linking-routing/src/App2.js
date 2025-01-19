
import './App.css';

function App2() {
    const time = new Date();
    const day = time.toLocaleString("es-MX", {weekday:"long"});
    const morning = time.getHours() >= 6 && time.getHours() <=12;
    let dayMessage;

    if (day.toLowerCase() === "lunes") {
        dayMessage = `Feliz ${day}`;
    } else if (day.toLowerCase() === "martes") {
        dayMessage = `Ya es ${day}, cuatro más...`;
    } else if (day.toLowerCase() === "miércoles") {
        dayMessage = `Ya es ${day}, tres más...`;
    } else if (day.toLowerCase() === "jueves") {
        dayMessage = `Ya es ${day}, 2 más...`;
    } else if (day.toLowerCase() === "viernes") {
        dayMessage = `¡En sus marcas!"`;
    } else { 
        dayMessage = `Tranquilo viejo`;
    }
        
  return (

    <div className = "boxmsg">
        <h1>
            {dayMessage}
        </h1>
        {morning ? <h2>¿Ya desayunaste?</h2>: ''}
    </div>
  );
}

export default App2;
