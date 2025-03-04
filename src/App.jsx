import React from "react";
import { Route, Routes } from "react-router";

import Home from './Components/Home/Home';
import GenerateRoadmap from "./Components/Form/GenerateRoadmap";

export default function App() {

  return (
    <div className="overflow-x-hidden  font-body">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/createroadmap" element={<GenerateRoadmap/>} />
      </Routes>
    </div>
  );
}