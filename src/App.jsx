import logo from "@/assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import RootLayout from "./layout/RootLayout";
import DrinksPage from "./pages/Drinks/DrinksPage";
import IceCreamPage from "./pages/IceCreams/IceCreamPage";
import CartPage from "./pages/Cart/CartPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/ice-creams" element={<IceCreamPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
