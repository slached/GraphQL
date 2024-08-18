import React from 'react';
import {useParams} from "react-router-dom";
import EditAndCreateClientForm from "../Components/EditAndCreateClientForm";

export default function EditClient(props) {
    const {id} = useParams()

    return (
        <div className={"flex flex-col gap-2 justify-center items-center h-screen"}>
            <h1 className={"text-2xl font-bold"}>Edit Project Form</h1>
            <EditAndCreateClientForm type={"edit"} id={id}/>
        </div>
    );
}
