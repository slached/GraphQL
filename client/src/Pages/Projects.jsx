import React from 'react';
import {useMutation, useQuery} from "@apollo/client";
import svgs from '../Static/SVG/GoogleIcons'

// queries
import {GET_PROJECT_QUERY} from "../Queries/projectQueries";

// mutations
import {DELETE_PROJECT} from '../Mutations/projectMutations'

export default function Projects(props) {

    const {loading, error, data} = useQuery(GET_PROJECT_QUERY)
    const [deleteProject] = useMutation(DELETE_PROJECT, {
        refetchQueries: [{query: GET_PROJECT_QUERY}],
        /*
        * update(cache, {data: {deleteProject}}) {
            const {projects} = cache.readQuery({query: GET_PROJECT_QUERY})
            cache.writeQuery({
                query: GET_PROJECT_QUERY,
                data: {projects: projects.filter(project => project.id !== deleteProject.id)}
            })
        }
        * */
    })

    return (
        <div className={"p-6"}>
            <p>Welcome to the projects page</p>
            <h1 className={"font-bold text-xl my-[50px]"}>Projects</h1>
            {error && <p className={"text-red-600"}>{error.message}</p>}
            <div className={"flex gap-2 flex-wrap md:flex-nowrap lg:flex-nowrap"}>
                {data ? data.projects.map((value, index) => (
                    <div key={index} className={"flex flex-col gap-2 p-2 rounded-md border-2 border-black w-fit"}>
                        <div className={"flex justify-end"}>
                            <div className={"absolute"}>
                                <img onClick={() => deleteProject({variables: {id: value.id}})}
                                     alt={"delete"} src={svgs.delete_icon}
                                     className={"relative bg-black rounded-full p-[3px] bottom-5 left-4 cursor-pointer"}/>
                            </div>
                        </div>
                        <p><strong>ID: </strong>{value.id}</p>
                        <p><strong>Name: </strong>{value.name}</p>
                        <p><strong>Description: </strong>{value.description}</p>
                        <p><strong>Status: </strong>{value.status}</p>
                        <p><strong>Client Id: </strong>{value.client.id}</p>
                        <p><strong>Client Name: </strong>{value.client.name}</p>

                    </div>
                )) : <p>Loading...</p>}
            </div>
        </div>
    );
}
