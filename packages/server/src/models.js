import { Model, DataTypes } from "sequelize";
import { dbConnection } from "./connection.js";
import { books, categories } from "../data/books.js";

const { STRING, FLOAT, INTEGER } = DataTypes;

class Book extends Model {}

Book.init(
  {
    id: { type: INTEGER, autoincrement: true, primaryKey: true },
    title: { type: STRING, allowNull: false },
    imgsrc: { type: STRING, allowNull: true },
    author: { type: STRING, allowNull: false },
    description: { type: STRING, allowNull: false },
    publisher: { type: STRING, allowNull: true },
    price: { type: FLOAT, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "book",
      plural: "books",
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

Book.belongsTo(Category);
Category.hasMany(Book);

await dbConnection.sync({ force: true });

await Category.bulkCreate(categories);
await Book.bulkCreate(
  books.map((b) => {
    const { id, ...book } = b;
    return book;
  })
);

export { Book, Category };
