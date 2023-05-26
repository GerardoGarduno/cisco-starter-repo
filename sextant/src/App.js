import React from 'react';
import './App.css';
// import Banner from './components/banner';
// // import Banner from './components/Banner';

import Exhibit from './components/Exhibit';
import Banner from './components/Banner';

function App() {
  // function exhibit(){
  //   return <h2>Children</h2>;
  // }
  // function Banner(){
  //   return <h1>Title of Page</h1>;
  // }
  return (
    <div className="App">
        <Banner/>  
        <Exhibit exhibitText = "This is an exhibit"/>
        <Exhibit exhibitText = "This is another exhibiit"/>
        <Exhibit exhibitText = "This is the last exhibiit"/>
        
    </div>
  );
}

export default App;
