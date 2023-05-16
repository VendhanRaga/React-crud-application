import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../context/appprovider";
import BaseApp from "../core/Base";




export default function UserComponents() {

    const { user, setUser}= AppState()

    const history = useHistory();



    const DeleteUser = (idx) => {
        const alterList = user.filter((person, id) => person.id != idx)
        setUser(alterList);
    }







    return (
        <BaseApp
            tittle="User Details">
            <div className="user-content">

                {user.map((person,idx) => (
                    <div key ={idx} className="user-card">
                        <h1>{person.name}</h1>
                        <p>id : {person.id}</p>
                        <p>email : {person.email}</p>
                        <p>Batch : {person.Batch}</p>
                        <p>exp : {person.exp}</p>
                        <div className="btn-group">
                            <button 
                            className="btn"
                            onClick={() => history.push(`/edit/${person.id}`)}
                        
                            >Edit</button>
                            <button
                                
                                className="btn"
                               
                                onClick={()=>history.push(`/${idx}`)}
                            >View</button>
                            <button className="btn"
                                onClick={() => DeleteUser(person.id)}>Delete</button>
                        </div>




                    </div>
                ))}

            </div>

        </BaseApp>
    )
}