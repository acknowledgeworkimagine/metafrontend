import "./App.css";
import { UserProvider, useUser } from "./UserContext";

const LoggedInUser = () => {

  //#6 Consuming the user components
  const {user} = useUser();
  return (
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  );
};


const Header = () => {
  return(
    <header>
    <h2>Blog App</h2>
    <LoggedInUser />
    </header>
  );
};



const Page = () => {
  const {user} = useUser();
  return(
    <div>
      <h2>What is Lorem ipsum</h2>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsa labore? 
      Earum dignissimos tempore officiis facilis excepturi sed vel odio quaerat ad, 
      necessitatibus, maiores neque illo cupiditate accusamus possimus libero!
      </p>
      <p>Written by {user.name} </p>
    </div>
  );
};


function App() {
  return(
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}

function Root() {
 return( 
 //#5 Wrap the app into the provider component.
 <UserProvider>
    <App />
 </UserProvider>
 );
}

export default Root;
