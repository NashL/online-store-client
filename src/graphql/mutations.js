import { gql } from "apollo-boost";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      expiredAt
    }
  }
`;

export const SIGNUP = gql`
  mutation signup($fullName: String! ,$email: String!, $password: String!){
    signup(fullName: $fullName, email: $email, password: $password) {
      token
      expiredAt
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation refreshtoken {
    refreshToken {
      token
      expiredAt
    }
  }
`;

