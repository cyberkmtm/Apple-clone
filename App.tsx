import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans antialiased bg-white text-[#1d1d1f] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* 
               Using a dynamic route for product pages to mimic separate pages 
               without duplicating code.
            */}
            <Route path="/:productId" element={<ProductPage />} />
            
            {/* Catch-all redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;