import React from "react";
import { useHistory } from "react-router-dom";


 export function NoPage(){
    const history = useHistory()
    return(
        <div>
            <h1>select home button</h1>
        

        <button
        onClick={() => history.push("/dashboard")}
        >Home</button>
        </div>
    )
}