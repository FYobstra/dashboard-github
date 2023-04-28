import { Routes, Route } from "react-router-dom";
import { Dashboard, Login } from "./Pages";
import { useAuth0 } from "@auth0/auth0-react";
import { ProtectedRoutes } from "./Component";

function App() {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <ProtectedRoutes user={isAuthenticated}>
                <Dashboard />
              </ProtectedRoutes>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes user={isAuthenticated}>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
