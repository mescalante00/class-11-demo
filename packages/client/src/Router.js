import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetailsPage from "./pages/BookDetailsPage";
import { Home } from "./pages/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="books/:id" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
