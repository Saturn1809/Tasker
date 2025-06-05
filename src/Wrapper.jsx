import { createContext } from "react";

export const todoContext = createContext(null);


const Wrapper = (props) => {

  return <todoContext.Provider value={"Hello from HOC Context"}>
            {props.children}
    </todoContext.Provider>
   
};

export default Wrapper
