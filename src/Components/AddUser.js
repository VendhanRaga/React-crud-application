import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../context/appprovider";
import BaseApp from "../core/Base";


export default function AddUser() {

    const {user,setUser} = AppState();


    const history  = useHistory();

    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [exp, setExp] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");


    const addNewUser =()=>{
        const newUser ={
            name:name,
            batch:batch,
            exp:exp,
            email:email,
            id:id,  
        }
        console.log(newUser);
        setUser([...user,newUser]);
        history.push('/dashboard');
    }
    




    return (
       <BaseApp
       tittle={"add new user"}>
        <div>

<input
    placeholder="id"
    value={id}
    onChange={(e) => setId(e.target.value)}
/>


<input
    placeholder="name"
    value={name}
    onChange={(e) => setName(e.target.value)}
/>



<input
    placeholder="batch"

    value={batch}
    onChange={(e) => setBatch(e.target.value)}
/>
<input
    placeholder="exp"
    value={exp}
    onChange={(e) => setExp(e.target.value)}

/>
<input
    placeholder="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
/>
<button
onClick={addNewUser}
>Add</button>

</div>
       </BaseApp>
    )
}