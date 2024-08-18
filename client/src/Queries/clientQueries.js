import {gql} from "@apollo/client";

const GET_CLIENT_QUERY = gql`
    query getClients {
        clients{
            id
            name
            email
            phone
        }
    }`

const GET_ONE_CLIENT_QUERY = gql`
    query getOneClient($id: ID!) {
        client(id:$id){
            id
            name
            email
            phone
        }
    }`

export {
    GET_CLIENT_QUERY,
    GET_ONE_CLIENT_QUERY
}