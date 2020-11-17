import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $age: Int!) {
    createUser(name: $name, age: $age) {
      id
    }
  }
`;

export const ADD_MONEY_TO_USERS_ACC = gql`
  mutation AddMoney($id: ID!, $amount: Int!) {
    addMoneyToUsersAcc(id: $id, amount: $amount) {
      balance
    }
  }
`;
export const CREATE_SQUARE = gql`
  mutation CreateSquare(
    $name: String!
    $description: String!
    $goal: Int!
    $userId: ID!
  ) {
    createSquare(
      name: $name
      description: $description
      goal: $goal
      userId: $userId
    ) {
      id
    }
  }
`;

export const ADD_MONEY_TO_SQUARE = gql`
  mutation AddMoneyToSquare($id: ID!, $amount: Int!) {
    addMoneyToSquare(id: $id, amount: $amount) {
      balance
    }
  }
`;

export const EDIT_SQUARE = gql`
  mutation EditSquare(
    $name: String!
    $description: String!
    $goal: Int!
    $id: ID!
  ) {
    editSquare(name: $name, description: $description, goal: $goal, id: $id) {
      id
    }
  }
`;

export const DELETE_SQUARE = gql`
  mutation DeleteSquare($id: ID!, $userId: ID!) {
    deleteSquare(id: $id, userId: $userId) {
      id
    }
  }
`;

export const EDIT_USER = gql`
  mutation EditUser($id: ID!, $name: String!, $age: Int!) {
    editUser(id: $id, name: $name, age: $age) {
      id
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const SUBTRACT_MONEY_FROM_SQUARE = gql`
  mutation SubtractFromSquare($id: ID!, $amount: Int!) {
    subtractMoneyFromSquare(id: $id, amount: $amount) {
      id
    }
  }
`;
