import React from "react";
import { useParams } from "react-router-dom";
import { AppState } from "../context/appprovider";
import BaseApp from "../core/Base";



export function UserDetail() {

    const {user} = AppState();
    const {id} = useParams()
    const person = user[id]
    return (
        <BaseApp
            tittle={"User Details"}>
            <div className="user-content">


                <div className="user-card">
                    <h1>{person.name}</h1>
                    <p>id : {person.id}</p>
                    <p>email : {person.email}</p>
                    <p>Batch : {person.Batch}</p>
                    <p>exp : {person.exp}</p>





                </div>


            </div>
        </BaseApp>
    )
}