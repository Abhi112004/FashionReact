import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Homebody from "./Home/Homebody";
import Shopbody from "./Shop/Shopbody";
import ContactBudy from "./contact/ContactBody";
import Electronicsbody from "./Electronics/Electronicsbody";
import Sportsbooksbody from "./sportsBooks/Sportsbooksbody";
import Salebody from "./Sale/Salebody";

const Home = () => {
  return (
    <>
      <Header />
      <Homebody />
      <Shopbody />
      <Electronicsbody />
      <Sportsbooksbody />
      <Salebody />
      <ContactBudy />
      <Footer />
    </>
  );
};  
export default Home;
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Use Routes instead of Switch
// import Header from "./Header";
// import Footer from "./Footer";
// import Homebody from "./Home/Homebody";
// import Shopbody from "./Shop/Shopbody";
// import ContactBudy from "./contact/ContactBody";
// import Electronicsbody from "./Electronics/Electronicsbody";
// import Sportsbooksbody from "./sportsBooks/Sportsbooksbody";
// import Salebody from "./Sale/Salebody";

// const Home = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>  {/* Use Routes to wrap Route components */}
//         <Route path="/" element={<Homebody />} />
//         <Route path="/shop" element={<Shopbody />} />
//         <Route path="/electronics" element={<Electronicsbody />} />
//         <Route path="/sportsbooks" element={<Sportsbooksbody />} />
//         <Route path="/sale" element={<Salebody />} />
//         <Route path="/contact" element={<ContactBudy />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default Home;
