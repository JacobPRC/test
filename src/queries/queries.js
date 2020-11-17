import { gql } from "@apollo/client";

export const FETCH_USERS = gql`
  {
    users {
      id
      age
      name
    }
  }
`;

export const FETCH_USER = gql`
  query FetchUser($id: ID!) {
    user(id: $id) {
      name
      balance
      squares {
        id
        balance
        goal
        description
        name
      }
    }
  }
`;

export const FETCH_SQUARE = gql`
  query FetchSquare($id: ID!) {
    square(id: $id) {
      balance
      goal
      description
      name
    }
  }
`;
