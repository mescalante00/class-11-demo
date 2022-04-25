import { gql } from "@apollo/client";

export const GET_BOOK_DETAILS = gql`
  query Book($bookId: ID!) {
  book(id: $bookId) {
    id
    title
    imgsrc
    author
    description
    publisher
    price
    category {
      id
      title
    }
  }
}
`;
