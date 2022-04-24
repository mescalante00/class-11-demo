import { Book, Category } from "./models.js";

export const resolvers = {
  Query: {
    books: async (parent, args) => {
      return await Book.findAll({
        include: Category,
      });
    },
    book: async (parent, args) => {
      return await Book.findByPk(args.id, { include: Category });
    },
    categories: async () => {
      return await Category.findAll({ include: Book });
    },
  },
};
