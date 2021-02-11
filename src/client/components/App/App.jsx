import React from 'react';
import './App.scss';
import Appinfo from "../AppInfo";
import ContentArea from "../ContentArea";

const App = () => {
  return (
      <div className="App">
          <Appinfo/>
          <ContentArea/>
      </div>
  );
}

export default App;