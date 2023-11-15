import React from 'react';
import './App.scss';
import Button from './components/button/Button';
import Header from './components/header/Header';
import Input from './components/input/Input';

function App() {
  return (
    <div className="App">
      <Header />
      <Button
        label="ボタン"
        className="danger"
      />
      <Input
        id="password"
        label="password"
        comment="comment"
        placeHolder="place holder"
      />
    </div>
  );
}

export default App;
