import { gql } from "apollo-server";

export const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    imgsrc: String
    description: String!
    author: String!
    publisher: String
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
  # Adding back necesary code
  type Error {
    message: String!
  }

  type Result {
    ok: Boolean!
    errors: [Error]
  }

  input BookInput {
    title: String!
    description: String!
    author: String!
    imgsrc: String
    categoryId: Float!
    price: Float!
  }

  type Mutation {
    addBook(input: BookInput!): Result
    updateBook(id: ID!, input: BookInput): Result
  }
`;
