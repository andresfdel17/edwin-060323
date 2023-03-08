import React, { useEffect } from 'react';
import { Router } from './router/Router';


function App() {
  useEffect(() => {
    document.title = "Ejercicios Edwin";
  },[]);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
