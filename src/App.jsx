import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./components/Public/PublicLayout";
import LandingPage from "./components/Public/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          {/* Other routes inside PublicLayout */}
        </Route>
        <Route path="/jaja" element={<PublicLayout />}>
          {/* <Route index element={<LandingPage />} /> */}
        </Route>
        {/* Add more routes as needed */}
        <Route path="landing" element={<LandingPage />}></Route>

        <Route path="home" element={<LandingPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
