import { useState } from 'react';

import './App.css';
import TICTACTOE from './component/tic-tac-toe';
import Timer from './component/timer';
import { Outlet, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Sidebar from './component/Sidebar';
import useIsMobile from './hook/useIsMobile';
import { useDispatch, useSelector } from 'react-redux';
import { updateSideBar } from './slice/SidebarSlice';

function App() {
  const dispatch = useDispatch();
  const isMobile = useIsMobile();
  const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);
  return (
    <>
      {/* <Outlet /> */}
      <div className="layout">
        <Sidebar /> {/* Common sidebar */}
        <main>
          <Outlet /> {/* Render the matched route component */}
          {isMobile && sidebarOpen && (
            <div
              className="overlay"
              onClick={() => dispatch(updateSideBar())}
            ></div>
          )}
        </main>
      </div>
      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </>
  );
}

export default App;
