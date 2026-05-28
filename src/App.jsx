import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ParentArea from "./pages/ParentArea/ParentArea";
import ManageProfiles from "./pages/ManageProfiles/ManageProfiles";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          />

          <Route
          path="/parent"
          element={
            <ProtectedRoute>
              <ParentArea />
            </ProtectedRoute>
          }
        />

        <Route 
        path="/parent/profiles"
        element={
          <ProtectedRoute>
            <ManageProfiles />
          </ProtectedRoute>
        }
      />
      </Routes>
    </BrowserRouter>
  )
}

export default App;