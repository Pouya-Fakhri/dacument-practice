import React from "react";
import { Route, Routes } from "react-router-dom";
import CardList from "./components/pages/CardList";
import CardDetail from "./components/pages/CardDetail";


function App() {
  return (
    <div className="bg-gray-900 h-screen text-gray-400" >
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="cards/:cardId" element={<CardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
