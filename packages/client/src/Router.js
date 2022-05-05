import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Book } from "./pages/Book";
import Navigation from "./components/Navigation";
import BookDetailsPage from "./pages/BookDetailsPage";
import { Home } from "./pages/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Layout />} />
          <Route path="book" element={<Book />} />
          <Route path="books/:id" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
