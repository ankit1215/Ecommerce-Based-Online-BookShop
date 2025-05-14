import React from 'react';
import './styles/main.css';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import Footer from "./components/Footer";




function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '2rem' }}>
        
        <AppRoutes />
        <Footer />
      </main>
    </div>
  );
}

export default App;
