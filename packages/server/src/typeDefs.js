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

  type Category {
    id: ID!
    title: String!
    meals: [Meal]
  }

  type Query {
    meals: [Meal]
    meal(id: ID!): Meal
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

  type Mutation {
    addMeal(input: MealInput!): Result
    updateMeal(id: ID!, input: MealInput): Result
  }
`;
