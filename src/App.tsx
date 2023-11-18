import React from 'react';
import './App.scss';
import Button from './components/button/Button';
import Header from './components/header/Header';
import Input from './components/input/Input';
import SignUp from './view/signup/SignUp';
import { Route, Routes } from "react-router-dom";
import LogIn from './view/login/LogIn';
import isLogin from './util/isLogin';
import Rent from './view/rent/Rent';
import Apply from './view/apply/Apply';

function App() {
  isLogin();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='login' element={<LogIn/>}/>

        <Route path='/rent' element={<Rent/>}/>
        <Route path='/apply' element={<Apply/>}/>
      </Routes>
    </div>
  );
}

export default App;
