import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import { Profile } from "../pages/profile/Profile";
import { ProtectedRoutes } from "../pages/ProtectedRoutes/ProtectedRoutes";
import Register from "../pages/register/register";
import { TechsListProvider } from "../Providers/TechsContext";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<h1>404 Pagina não encontrada</h1>} />

      <Route path="/" element={<Login />} />

      <Route path="/profile" element={<ProtectedRoutes />}>
        <Route
          index
          element={
            <TechsListProvider>
              <Profile />
            </TechsListProvider>
          }
        />
      </Route>

      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
