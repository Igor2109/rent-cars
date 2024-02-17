import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ROUTE_PATH } from "./constants/routes";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path={ROUTE_PATH.home} element={<SharedLayout />}>
        <Route path={ROUTE_PATH.home} element={<HomePage />} />
        <Route path={ROUTE_PATH.catalog} element={<CatalogPage />} />
        <Route path={ROUTE_PATH.favorites} element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
