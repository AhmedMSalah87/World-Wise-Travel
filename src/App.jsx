import { BrowserRouter, Routes, Route } from "react-router";
import PricingPage from "./pages/PricingPage";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AppPage from "./pages/AppPage";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import UserProvider from "./components/UserContext";
import CitiesProvider from "./components/CitiesContext";
import Cities from "./components/Cities";
import Countries from "./components/Countries";
import Form from "./components/Form";
import { Navigate } from "react-router";

function App() {
  return (
    <UserProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="app" element={<AppPage />}>
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<Cities />} />
              <Route path="countries" element={<Countries />} />
              <Route path="form" element={<Form />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </UserProvider>
  );
}

export default App;
