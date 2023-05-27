import React from 'react';
import './App.css';
// import Banner from './components/banner';
// // import Banner from './components/Banner';

import Exhibit from './components/Exhibit';
import Banner from './components/Banner';
import AddressDisplay from './components/address';
import PylonConnector from './components/PylonConnector';
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
        <Exhibit exhibitText = "This is the users IPv4">
          <AddressDisplay api_url = 'https://api.ipify.org?format=json'/>
        </Exhibit>
        <Exhibit exhibitText = "This is the users IPv6">
          <AddressDisplay api_url='https://api64.ipify.org?format=json' />
        </Exhibit>
        <Exhibit exhibitText = "This is the latency of the user.">
          <PylonConnector />
        </Exhibit>

    </div>
  );
}

export default App;
