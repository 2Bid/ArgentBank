import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './page/Layout';
import Home from './page/home/Home';
import Log from './page/log/Log';
import User from './page/user/User';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/log" element={<Log/>}></Route>
        <Route path="/user:id" element={<User/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
