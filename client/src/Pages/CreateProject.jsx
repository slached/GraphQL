import React from 'react';

import EditAndCreateProjectForm from "../Components/EditAndCreateProjectForm";

export default function CreateProject(props) {

    return (
        <div className={"flex flex-col gap-2 justify-center items-center h-screen"}>
            <h1 className={"text-2xl font-bold"}>Create Project Form</h1>
            <EditAndCreateProjectForm type={"create"} />
        </div>
    );
}
