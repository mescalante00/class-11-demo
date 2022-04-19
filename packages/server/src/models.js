import { Model, DataTypes } from "sequelize";
import { dbConnection } from "./connection.js";
import { books, bookshelf } from "../data/books.js";
import { meals, categories } from "../data/meals.js";

const { STRING, INTEGER, FLOAT } = DataTypes;

class Book extends Model {}

Book.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    //Defined in the json file books.js
    author: { type: STRING, allowNull: false },
    country: { type: STRING, allowNull: false },
    language: { type: STRING, allowNull: false },
    pages: { type: FLOAT, allowNull: false },
    title: { type: STRING, allowNull: false },
    year: { type: FLOAT, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "book",
      plural: "books",
    },
  }
);

class BookShelf extends Model {}

BookShelf.init(
  {
    id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: STRING, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "bookshelf",
      plural: "bookshelf",
    },
  }
);

class Meal extends Model {}

Meal.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: { type: STRING, allowNull: false },
    imgsrc: { type: STRING, allowNull: false },
    description: { type: STRING, allowNull: false },
    price: { type: FLOAT, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "meal",
      plural: "meals",
    },
  }
);

class Category extends Model {}

Category.init(
  {
    id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: STRING, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "category",
      plural: "categories",
    },
  }
);

// Define our associations
Meal.belongsTo(Category);
Category.hasMany(Meal);
// //Define more associations
Book.belongsTo(BookShelf);
BookShelf.hasMany(Book);

await dbConnection.sync({ force: true });

// seed the database!
await Category.bulkCreate(categories);
await Meal.bulkCreate(
  meals.map((m) => {
    const { id, ...meal } = m;
    return meal;
  })
);

await BookShelf.bulkCreate(bookshelf);
await Book.bulkCreate(
  books.map((b) => {
    const { id, ...book } = b;
    return book;
  })
);

export { Meal, Category, Book, BookShelf };
