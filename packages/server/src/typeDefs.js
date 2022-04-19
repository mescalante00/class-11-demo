import { gql } from "apollo-server";

export const typeDefs = gql`
  type Meal {
    id: ID!
    title: String!
    description: String!
    imgsrc: String
    price: Float!
    categoryId: ID
    category: Category
  }

  type Book {
    id: ID!
    author: String!
    country: String!
    imageLink: String
    language: String!
    link: String
    pages: Float!
    title: String!
    year: Float!
  }

  type BookShelf {
    id: ID!
    title: String!
    books: [Book]
  }

  type Category {
    id: ID!
    title: String!
    meals: [Meal]
  }

  type Query {
    meals: [Meal]
    books: [Book]
    meal(id: ID!): Meal
    book(id: ID!): Book
    categories: [Category]
  }
  type Error {
    message: String!
  }

  type Result {
    ok: Boolean!
    errors: [Error]
  }
  # Special types start
  input MealInput {
    title: String!
    description: String!
    imgsrc: String
    price: Float!
    categoryId: ID!
  }

  input BookInput {
    author: String!
    country: String!
    language: String!
    pages: Float!
    title: String!
    year: Float!
  }

  type Mutation {
    addMeal(input: MealInput!): Result
    addBook(input: BookInput!): Result
    updateBook(id: ID!, input: BookInput): Result
    updateMeal(id: ID!, input: MealInput): Result
  }
`;
