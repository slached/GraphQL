import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";
import {CREATE_CLIENT, UPDATE_CLIENT} from "../Mutations/clientMutations";
import {GET_ONE_CLIENT_QUERY} from "../Queries/clientQueries";

export default function EditAndCreateClientForm(props) {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const navigate = useNavigate();

    const [addClient] = useMutation(CREATE_CLIENT, {
        variables: {name, email, phone}
    });

    const [updateClient] = useMutation(UPDATE_CLIENT);

    const client = useQuery(GET_ONE_CLIENT_QUERY, {variables: {id: props.id}})

    useEffect(() => {
        if (props.type === "edit") {
            setName(client?.data?.client?.name)
            setEmail(client?.data?.client?.email)
            setPhone(client?.data?.client?.phone)
        }
    }, [client.data]);

    const onSubmit = (e) => {
        //this prevents reload after submit
        e.preventDefault();
        if (name === '' || email === '' || phone === '') {
            alert("Please fill all the input fields")
            setName("")
            setEmail("")
            setPhone("")
        } else {
            props.type === "create" && addClient()
            props.type === "edit" && updateClient({variables: {id: props.id, name, email, phone}})
            navigate("/clients")
            window.location.reload()
        }
    }

    return (
        <form onSubmit={onSubmit} className={"flex flex-col gap-2 p-7 border rounded-2xl border-amber-400 w-fit"}>
            <label className={"flex gap-2 items-center justify-between"}>
                <p>Name:</p>
                <input onChange={(e) => setName(e.target.value)} value={name}
                       className={"outline-none py-1 border rounded-l pl-3"} name={"name"} type={"text"}/>
            </label>
            <label className={"flex gap-2 items-center justify-between"}>
                <p>E-Mail:</p>
                <input onChange={(e) => setEmail(e.target.value)}
                       value={email} className={"outline-none py-1 border rounded-l pl-3"}
                       name={"email"} type={"text"}/>
            </label>
            <label className={"flex gap-2 items-center justify-between"}>
                <p>Phone:</p>
                <input onChange={(e) => setPhone(e.target.value)}
                       value={phone} className={"outline-none py-1 border rounded-l pl-3"} name={"phone"}
                       type={"text"}/>
            </label>
            <div className={"flex justify-center mt-[25px]"}>
                <button className={"bg-amber-400 w-fit p-2 rounded-xl"} type={"submit"}>
                    {props.type === "create" ? <p>Create Client</p> : <p>Update Client</p>}
                </button>
            </div>
        </form>
    );
}

