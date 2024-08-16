import {gql} from "@apollo/client";

const GET_PROJECT_QUERY = gql`
query getProjects {
    projects{
        id,
        name,
        description,
        status,
        client {
            id,
            name
        }  
    } 
}`


export {GET_PROJECT_QUERY}