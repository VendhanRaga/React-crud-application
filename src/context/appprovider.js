import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { data } from "../core/Data/data";

//step 1 creating a context

const Appcontext = createContext();

const AppProvider = ({children})=>{

    const[user,setUser] = useState(data); 


    // useEffect(()=>{

    //     const getuserDetails = async()=>{

    //     try {
    //         const responce =await fetch("https://6413a5f5c469cff60d67b044.mockapi.io/users",{
    //             method : "GET",
    //         });
    //         const data = await responce.json();
    //         console.log(data);
    //         setUser(data);
    //         if(!data){
    //             console.log("unable to fetch data");
    //         }
    //     } catch (error) {

    //         console.log(error);
            
    //     }
          
    // }
    // getuserDetails();


    // },[])

    return (
        <Appcontext.Provider
         value={{
            user,
         
         setUser}}>
            {children}
        </Appcontext.Provider>
)

    
}

export const AppState =()=>{
    return useContext(Appcontext)
}

export default AppProvider