import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductEditor from "./components/product/ProductEditor/ProductEditor";
import FeedView from "./views/FeedView"
import ProductView from "./views/ProductView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeedView />} />
        <Route path="/editor" element={<ProductEditor />} />
        <Route path="/product/:productId" element={<ProductView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
