import React from "react";
import { BookForm } from "./BookForm";

export const AddBook = ({ onClose }) => {
  return (
    <BookForm
      initialValues={{
        title: "",
        description: "",
        author: "",
        publisher: "",
        price: 0,
        categoryId: "1",
        imgsrc: "",
      }}
      onClose={onClose}
    />
  );
};
