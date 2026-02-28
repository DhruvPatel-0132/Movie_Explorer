import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import LoginForm from "../components/LoginForm";
import ProtectedRoute from "./ProtectedRoute";
import WatchlistPage from "../pages/WatchlistPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/watchlist"
        element={
          <ProtectedRoute>
            <WatchlistPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;