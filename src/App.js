import React from 'react';
import './App.css';
import Particles from './components/Particles';
import Image from 'react-image-resizer';

function App() {
  return (
    <div className="App">
        <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <Particles />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
        <div className="container-div">
          <Image
          img src={"./rrlogo.png"} alt="RR" className="center"
          height={380}
          width={320}/>
        </div>
          {/* render <Route> and <NavTabs /> here */}
        </div>
      </div>
    </div>
  );
}

export default App;
