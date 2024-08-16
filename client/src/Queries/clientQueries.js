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


export {
    GET_CLIENT_QUERY
}