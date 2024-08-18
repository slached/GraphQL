import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";
import {ADD_PROJECT, UPDATE_PROJECT} from "../Mutations/projectMutations";
import {GET_ONE_PROJECT_QUERY} from "../Queries/projectQueries";

export default function EditAndCreateProjectForm(props) {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [clientId, setClientId] = React.useState('');

    const navigate = useNavigate();

    const [addProject] = useMutation(ADD_PROJECT, {
        variables: {name, description, status, clientId}
    });
    const [updateProject] = useMutation(UPDATE_PROJECT);

    const project = useQuery(GET_ONE_PROJECT_QUERY, {variables: {id: props.id}})

    useEffect(() => {
        if (props.type === "edit") {
            setName(project?.data?.project?.name)
            setDescription(project?.data?.project?.description)
            setStatus(project?.data?.project?.status)
            setClientId(project?.data?.project?.client?.id)
        }
    }, [project.data]);

    const onSubmit = (e) => {
        //this prevents reload after submit
        e.preventDefault();
        props.type === "create" && addProject()
        props.type === "edit" && updateProject({
            variables: {
                id: props.id,
                name,
                description,
                status,
                clientId: clientId
            }
        })
        navigate("/projects")
        window.location.reload()
    }


    return (
        <form onSubmit={onSubmit} className={"flex flex-col gap-2 p-7 border rounded-2xl border-amber-400 w-fit"}>
            <label className={"flex gap-2 items-center justify-between"}>
                <p>Name:</p>
                <input onChange={(e) => setName(e.target.value)} value={name}
                       className={"outline-none py-1 border rounded-l pl-3"} name={"name"} type={"text"}/>
            </label>
            <label className={"flex gap-2 items-center justify-between"}>
                <p>Description:</p>
                <input onChange={(e) => setDescription(e.target.value)}
                       value={description} className={"outline-none py-1 border rounded-l pl-3"}
                       name={"description"} type={"text"}/>
            </label>
            <label className={"flex gap-2 items-center justify-between"}>
                <p>Status:</p>
                <input onChange={(e) => setStatus(e.target.value)}
                       value={status} className={"outline-none py-1 border rounded-l pl-3"} name={"status"}
                       type={"text"}/>
            </label>
            <label className={"flex gap-2 items-center justify-between"}>
                <p>Client ID:</p>
                <input onChange={(e) => setClientId(e.target.value)}
                       value={clientId} className={"outline-none py-1 border rounded-l pl-3"} name={"clientId"}
                       type={"text"}/>
            </label>
            <div className={"flex justify-center mt-[25px]"}>
                <button className={"bg-amber-400 w-fit p-2 rounded-xl"} type={"submit"}>
                    {props.type === "create" ? <p>Create Project</p> : <p>Update Project</p>}
                </button>
            </div>
        </form>
    );
}
