import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Spinner from "./components/Spinner";
import UserProvider from "./components/UserContext";
import CitiesProvider from "./components/CitiesContext";
import Cities from "./components/Cities";
import Countries from "./components/Countries";
import Form from "./components/Form";
import CityInfo from "./components/CityInfo";
import { Navigate } from "react-router";
const PricingPage = lazy(() => import("./pages/PricingPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AppPage = lazy(() => import("./pages/AppPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));

function App() {
  return (
    <UserProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="product" element={<ProductPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="app" element={<AppPage />}>
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<Cities />} />
                <Route path="cities/:id" element={<CityInfo />} />
                <Route path="countries" element={<Countries />} />
                <Route path="form" element={<Form />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </UserProvider>
  );
}

export default App;
