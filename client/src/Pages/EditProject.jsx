import React from 'react';
import EditAndCreateProjectForm from "../Components/EditAndCreateProjectForm";
import {useParams} from "react-router-dom";

export default function EditProject(props) {

    const { id } = useParams()

    return (
        <div className={"flex flex-col gap-2 justify-center items-center h-screen"}>
            <h1 className={"text-2xl font-bold"}>Edit Project Form</h1>
            <EditAndCreateProjectForm type={"edit"} id={id}/>
        </div>
    );
}
