import { Suspense } from "react";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Website from "./pages/website";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Website/>} />
      <Route path="/properties" element={<Properties/>} />
      </Route>
      
    {/* <Website></Website> */}
    </Routes>
    </Suspense>
    </BrowserRouter>
    
  );
}

export default App;
