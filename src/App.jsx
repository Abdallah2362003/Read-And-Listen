import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SplashScreen from "./pages/SplashScreen";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import MainLayout from "./layouts/MainLayout";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashClose = () => {
    setShowSplash(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
                {showSplash && (
                  <div className="fixed inset-0 z-50">
                    <SplashScreen onClose={handleSplashClose} />
                  </div>
                )}
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <AboutPage />
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
