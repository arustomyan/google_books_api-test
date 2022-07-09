import React from "react";
import { Header } from "./components/Header";
import { BookDetails } from "./components/BookDetails/";
import { Route, Routes } from "react-router-dom";
import { BooksList } from "./components/BookList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/detail/:id" element={<BookDetails />} />
      </Routes>
    </>
  );
}

export default App;
