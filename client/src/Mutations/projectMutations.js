import {gql} from "@apollo/client";

const ADD_PROJECT = gql`
    mutation addProject($name: String!, $description: String!,$status: ProjectStatus!,$clientId:ID!) {
        addProject(name: $name, description: $description, status: $status, clientId:$clientId) {
            name,
            description,
            status,
            client{
                id,
                name
            }
        }
    }
`

const DELETE_PROJECT = gql`
    mutation deleteProject($id:ID!) {
        deleteProject(id:$id) {
            id,
            name,
            description,
            status,
            client{
                id,
                name
            }
        }
    }
`

const UPDATE_PROJECT = gql`
    mutation updateProject($id:ID!,$name:String!,$status: UpdateStatus!,$description:String!,$clientId:ID!) {
        updateProject(id:$id,name:$name,status:$status,description:$description,clientId:$clientId) {
            id,
            name,
            description,
            status,
            client{
                id,
                name
            }
        }
    }
`
export {ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT}