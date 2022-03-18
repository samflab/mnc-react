import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider } from "./context/filter-context";
import { WishlistProvider } from "./context/wishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <WishlistProvider>
    <FilterProvider>
      <Router>
        <App />
      </Router>
    </FilterProvider>
    </WishlistProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
