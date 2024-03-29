import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Cart,
  Contact,
  Home1,
  NotFoundNerror,
  Products,
  SingleProducts,
} from "./screen";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Footer, Header } from "./Components";
// import { AppProvider } from "./Context/ProductContaxt";

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#f6f8fa",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  // don't repet code its a rule of coding 
  return (
    // <AppProvider>
      <ThemeProvider theme={theme}>
        <Router>
         
          <Header />
           <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home1 />}></Route>
            {/* ===========repet code ======== */}
            <Route path="/e-website" element={<Home1 />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route
              path="/singleproduct/:id"
              element={<SingleProducts />}
            ></Route>
            <Route path="*" element={<NotFoundNerror />}></Route>
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    // </AppProvider>
  );
}

export default App;
