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
export const CURRENT_USER = gql`
  query currentUser {
    currentUser {
      userId
      fullName
      email
    }
  }
`

export const LOGOUT = gql`
  query logout {
    logout {
      message
    }
  }
`