import { createContext } from "react";
import { useState } from "react";

export const Contex = createContext();
export const ContexProvider = ({children}) => {
    const [input, setInput] = useState("")
    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(input);
    }
    const changePage = () => {
        setInput(input);
    }
    return (
        <Contex.Provider value={{ handleChange, input,changePage }}>
            {children}
        </Contex.Provider>
    )
}
