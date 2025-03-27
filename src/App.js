import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoalInput from './Componentes/GoalInput';  
import Instrucciones from "./Componentes/Instrucciones";
import NavBar from './Componentes/Navbar';
import { ThemeProvider } from './Context/Context';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider>
        <NavBar/>
      <BrowserRouter>
          <Routes>
            <Route path="/Instrucciones" element={<Instrucciones />}></Route>
            <Route path="/" element={<GoalInput />}></Route>
          </Routes>
      </BrowserRouter>
      </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
