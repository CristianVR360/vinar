import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Terroir from './components/Terroir';
import Vinas from './components/Vinas';
import ShopTeaser from './components/ShopTeaser';
import Footer from './components/Footer';
import VinarPresentation from './components/VinarPresentation';

function getRoute() {
  const hash = window.location.hash;
  if (hash === '#/presentacion') return 'presentacion';
  return 'home';
}

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route === 'presentacion') {
    return <VinarPresentation />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Terroir />
        <Vinas />
        <ShopTeaser />
      </main>
      <Footer />
    </>
  );
}

export default App;
