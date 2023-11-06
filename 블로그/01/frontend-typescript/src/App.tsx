import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HeaderCom from './components/common/HeaderCom';
import Home from './pages/Home';
import FooterCom from './components/common/FooterCom';
import { NOTFOUND } from 'dns';
import NotFound from './components/common/NotFound';

function App() {
  return (
    <div className="App">
      {/* 머리말 */}
      <HeaderCom />

      {/* 본문 */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />



      </Routes>

      {/* 꼬리말 */}
      <FooterCom />
    </div>
  );
}

export default App;