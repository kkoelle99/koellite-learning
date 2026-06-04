import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ParentArea from "./pages/ParentArea/ParentArea";
import ManageProfiles from "./pages/ManageProfiles/ManageProfiles";
import Settings from "./pages/Settings/Settings";
import ThemeSettings from "./pages/ThemeSettings/ThemeSettings";
import AccessibilitySettings from "./pages/AccessibilitySettings/AccessibilitySettings";

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

      <Route
        path="/parent/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      <Route
      path="/parent/settings/themes"
      element={
        <ProtectedRoute>
          <ThemeSettings />
        </ProtectedRoute>
      }
      />

      <Route
      path="/parent/settings/accessibility"
      element={
        <ProtectedRoute>
          <AccessibilitySettings />
        </ProtectedRoute>
      }
      />

      </Routes>
    </BrowserRouter>
  )
}

export default App;