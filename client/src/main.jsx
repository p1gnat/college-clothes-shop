import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./pages/App.jsx";
import Shop from "./pages/Shop.jsx";
import ShopItem from "./pages/ShopItem.jsx";
import Cart from "./pages/Cart.jsx";
import NotFound from "./pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/main" element={<App />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/shop/:id" element={<ShopItem />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
