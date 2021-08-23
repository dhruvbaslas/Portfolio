import './App.css';
import React, { useState } from 'react';
import DarkTheme from './Components/DarkTheme';
import "bootstrap-icons/font/bootstrap-icons.css";
import Root from './Components/Root';

function App() {
  
  const [theme, setTheme] = useState('dark');
  function themeType(theme){
    setTheme(theme);
  }
  return (
    <>
    <DarkTheme theme={theme} themeType={themeType}></DarkTheme>
    <Root theme={theme}></Root>
    </>
  );
}

export default App;
