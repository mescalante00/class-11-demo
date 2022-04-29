import { gql } from "@apollo/client";

export const ADD_BOOK = gql`
  mutation ADD_BOOK($input: BookInput!) {
    addBook(input: $input) {
      ok
      errors {
        message
      }
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation UPDATE_BOOK($id: ID!, $input: BookInput!) {
    updateBook(id: $id, input: $input) {
      ok
      errors {
        message
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DELETE_BOOK($id: ID!) {
    deleteBook(id: $id) {
      ok
      errors {
        message
      }
    }
  }
`;
