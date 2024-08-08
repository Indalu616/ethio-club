import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import BlogDetailPage from "./Components/BlogDetailPage/BlogDetailPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/ethio-club" element={<HomePage />}></Route>
        <Route path="/ethio-club/blogs" element={<BlogDetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
