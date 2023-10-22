
import {createContext} from "react";

const UserContext = createContext({
    user : {
        name : "Dummy Name",
        email : "dummy@gmail.com"
    }
});

// this has nothing with the functionality of context
// it is used to display the name of the context while using React Developer Tools
// it is just helpful in debugging but doesn't impact functionality
// but it's important to write displayName as it helps in debugging
UserContext.displayName = "UserContext";

export default UserContext;