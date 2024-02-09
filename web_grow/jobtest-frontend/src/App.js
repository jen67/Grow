import React from 'react';

import Navbar from './components/Navbar';
import MyFigure from './components/MyFigure';
import MySection from './components/MySection';
import Hero from './components/Hero';


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    {/* <main className='flex justify-between'>
      <MySection />
      <MyFigure />
    </main> */}
    </>
  );
}

export default App;
