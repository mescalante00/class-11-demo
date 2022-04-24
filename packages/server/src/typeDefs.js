import { gql } from "apollo-server";

export const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    imgsrc: String
    description: String!
    publisher: String!
    price: Float!
    categoryId: ID
    category: Category
  }
  type Category {
    id: ID!
    title: String!
    books: [Book]
  }
  type Query {
    books: [Book]
    book(id: ID!): Book
    categories: [Category]
  }
`;
