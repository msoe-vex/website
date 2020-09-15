import React from 'react';
import './App.scss';
import Landing from './components/Landing';
import { StaticMenu } from './components/Menu';
import Sections from './components/Sections';
import { ScrollingProvider } from 'react-scroll-section';

function App() {
  return (
    <div className="App">
      <ScrollingProvider scrollBehavior="smooth">
      <StaticMenu/>
        <Landing>
          <Sections/>
        </Landing>  
      </ScrollingProvider>
    </div>
  );
}

export default App;
