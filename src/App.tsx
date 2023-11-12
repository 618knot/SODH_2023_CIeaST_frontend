import React from 'react';
import './App.scss';
import Button from './components/button/Button';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Button
        label="ボタン"
        className="danger"
      />
    </div>
  );
}

export default App;
