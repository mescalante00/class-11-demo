import { bookshelf } from "../data/books.js";
import { Meal, Category, BookShelf, Book } from "./models.js";
export const resolvers = {
  Query: {
    meals: async (parent, args) => {
      return await Meal.findAll({
        include: Category,
        order: [["title", "ASC"]],
      });
    },
    books: async (parent, args) => {
      return await Book.findAll({
        include: BookShelf,
        order: [["title", "ASC"]],
      });
    },
    meal: async (parent, args) => {
      return await Meal.findByPk(args.id, {
        include: Category,
      });
    },
    book: async (parent, args) => {
      return await Book.findByPk(args.id, {
        include: BookShelf,
      });
    },
    categories: async () => {
      return await Category.findAll({ include: Meal });
    },
    bookshelf: async () => {
      return await BookShelf.findAll({ include: Book });
    },
  },
  // Adding Resolves from lecture
  Mutation: {
    addMeal: async (parent, args) => {
      const { input } = args;
      await Meal.create(input);
      return { ok: true };
    },

    addBook: async (parent, args) => {
      const { input } = args;
      await Book.create(input);
      return { ok: true };
    },
    updateBook: async (parent, args) => {
      const { id, input } = args;
      await Book.update(input, {
        where: { id },
      });
      return { ok: true };
    },
    updateMeal: async (parent, args) => {
      const { id, input } = args;
      await Meal.update(input, {
        where: { id },
      });
      return { ok: true };
    },
  },
};
