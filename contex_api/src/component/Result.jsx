import { useContext } from "react";
import { Contex } from "../Context/Context";

export const Result = () => {
    const { input } = useContext(Contex);
    
    return (
        
        <>
            <h1>Hello</h1>
            <h2>{ input}</h2>
        </>
    )
}