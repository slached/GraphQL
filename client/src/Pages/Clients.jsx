import React from 'react';
import {gql, useQuery} from "@apollo/client";
import svgs from '../Static/SVG/GoogleIcons'

const GET_CLIENT_QUERY = gql`
query getClients {
  clients{
    id
    name
    email
    phone
  }
}`

export default function Clients(props) {

    const {loading, error, data} = useQuery(GET_CLIENT_QUERY)

    return (
        <div className={"p-6"}>
            <p>Welcome to the clients page</p>
            <h1 className={"font-bold text-xl my-[50px]"}>Clients</h1>
            {error && <p className={"text-red-600"}>{error.message}</p>}
            <div className={"flex gap-2"}>
                {data ? data.clients.map((value, index) => (
                    <div key={index} className={"flex flex-col gap-2 p-2 rounded-md border-2 border-black w-fit"}>
                        <div className={"flex justify-end"}>
                            <div className={"absolute "}>
                                <img alt={"delete"} src={svgs.delete_icon}
                                     className={"relative bg-black rounded-full p-[3px] bottom-5 left-4"}/>
                            </div>
                        </div>
                        <p><strong>ID: </strong>{value.id}</p>
                        <p><strong>Name: </strong>{value.name}</p>
                        <p><strong>E-mail: </strong>{value.email}</p>
                        <p><strong>Phone: </strong>{value.phone}</p>
                    </div>
                )) : <p>Loading...</p>}
            </div>
        </div>
    );
}
