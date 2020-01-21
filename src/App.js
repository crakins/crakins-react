import React from 'react';
import { Header } from './components/header/header.component'
import { Logo } from './components/logo/logo.component'
import { Footer } from './components/footer/footer.component'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Logo />
      <Footer />
    </div>
  );
}

export default App;
