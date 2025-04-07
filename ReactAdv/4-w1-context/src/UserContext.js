import {createContext, useContext, useState} from "react";


const UserContext = createContext(undefined);


//#1 Create a provide component.

export const UserProvider = ({children}) => {

    //#2 Value should the newly authenticated user
    const [user] = useState({
        name: "Pedro",
        email: "pedro@picapiedra.com",
        dob: "01/01/2025",
    })
    //#3 Hook the state to the value prop
    return <UserContext.Provider  value = {{user}}>
    {children}
    </UserContext.Provider>;
};

//#4 ... for component to subscribe to context
export const useUser = () => useContext(UserContext);