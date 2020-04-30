import React from 'react';
import './app.css';

import Sidebar from "./components/sidebar"
import Main from "./components/main";
import Bio from "./components/bio";


function App() {
    return (
      <div className="App">
        <Sidebar></Sidebar>
        <Main></Main>
        <Bio></Bio>
      </div>
    );
}

export default App;
