// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // BrowserRouter로 수정
import Header from "./components/Header/HeaderComponent";
import WeatherPage from "./pages/WeatherPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router> {/* BrowserRouter를 Router로 수정 */}
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
