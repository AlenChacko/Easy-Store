import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className='container py-3 mx-auto flex-grow'>
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default App;
