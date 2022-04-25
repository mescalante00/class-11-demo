import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GET_BOOKS {
    books {
      id
      title
      author
      imgsrc
      price
      categoryId
      category {
        id
        title
      }
    }
  }
`;

export const GET_BOOK = gql`
  query GET_BOOK($bookId: ID!) {
    book(id: $bookId) {
      title
      author
      imgsrc
      description
      publisher
      price
      categoryId
    }
  }
`;
