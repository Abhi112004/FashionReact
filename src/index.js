import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Homebody from "./Home/Homebody";
import Shopbody from "./Shop/Shopbody";
import Electronicsbody from "./Electronics/Electronicsbody";
import Sportsbooksbody from "./sportsBooks/Sportsbooksbody";
import Salebody from "./Sale/Salebody";
import ContactBudy from "./contact/ContactBody";
import Header from "./Header";
import Footer from "./Footer";
import Error from "./Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homebody />} />
        <Route path="/Shop" element={<Shopbody />} />
        <Route path="/Electronics" element={<Electronicsbody />} />
        <Route path="/Sports&books" element={<Sportsbooksbody />} />
        <Route path="/Sale" element={<Salebody />} />
        <Route path="/contact" element={<ContactBudy />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);
