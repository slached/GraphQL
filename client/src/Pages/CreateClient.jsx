import React from 'react';
import EditAndCreateClientForm from "../Components/EditAndCreateClientForm";

export default function CreateClient(props) {
    return (
        <div className={"flex flex-col justify-center items-center h-screen gap-2"}>
            <h1 className={"text-2xl font-bold"}>Create Client Form</h1>
            <EditAndCreateClientForm type={"create"}/>
        </div>
    );
}
