import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Result } from "./Result"
import { Contex } from "../Context/Context";
export const Input = () => {
    const {input,handleChange,changePage}=useContext(Contex)
    return (
        <>
            <input type="text" onChange={(e) => {
                handleChange(e)
            }}/>
            <Link to="/result"><button onClick={changePage}>Submit</button></Link>
            {/* <Result input={input}/> */}
        </>
        
    )
}