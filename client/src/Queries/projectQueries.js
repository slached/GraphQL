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

const GET_ONE_PROJECT_QUERY = gql`
    query getOneProject ($id: ID!) {
        project(id:$id){
            id
            name
            description,
            status,
            client {
                id
                name
            }
        }

    }
`
export {GET_PROJECT_QUERY,GET_ONE_PROJECT_QUERY}