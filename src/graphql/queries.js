import { gql } from "apollo-boost";

export const GET_USERS = gql`
  query users {
    users {
      userId
      fullName
      email
      password
      createdAt
      updatedAt
    }
  }
`