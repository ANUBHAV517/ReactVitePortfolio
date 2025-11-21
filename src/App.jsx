import { useState } from 'react';
import './index.css';
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
import { updateSideBar } from './redux/slice/SidebarSlice';
import { Helmet } from 'react-helmet';
import {
  faCog,
  faMoon,
  faSpinner,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  const dispatch = useDispatch();
  const isMobile = useIsMobile();
  const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);
  const [styleSwitcher, setStyleSwitcher] = useState(false);
  const [isDark, setIsDark] = useState(false);
  // /* toggle style switcher */
  // console.log('switcher js start');

  // const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
  // styleSwitcherToggle.addEventListener('click', () => {
  //   document.querySelector('.style-switcher').classList.toggle('open');
  // });

  // window.addEventListener('scroll', () => {
  //   if (document.querySelector('.style-switcher').classList.contains('open')) {
  //     document.querySelector('.style-switcher').classList.remove('open');
  //   }
  // });

  // const alternateStyles = document.querySelectorAll('.alternate-style');
  // function setActiveStyle(color) {
  //   alternateStyles.forEach((style) => {
  //     if (color === style.getAttribute('title')) {
  //       style.removeAttribute('disabled');
  //     } else {
  //       style.setAttribute('disabled', 'true');
  //     }
  //   });
  // }
  // console.log('switcher js');

  // const dayNight = document.querySelector('.day-night');
  // dayNight.addEventListener('click', () => {
  //   dayNight.querySelector('i').classList.toggle('fa-sun');
  //   dayNight.querySelector('i').classList.toggle('fa-moon');
  //   document.body.classList.toggle('dark');
  // });
  // window.addEventListener('load', () => {
  //   if (document.body.classList.contains('dark')) {
  //     dayNight.querySelector('i').classList.add('fa-sun');
  //   } else {
  //     dayNight.querySelector('i').classList.add('fa-moon');
  //   }
  // });
  console.log('st', styleSwitcher);
  const getColor = (className) => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      const bgColor = getComputedStyle(element).backgroundColor;
      changeSkinColor(bgColor);
    }
  };
  const changeSkinColor = (color) => {
    document.documentElement.style.setProperty('--skin-color', color);
  };
  return (
    <>
      {/* <Outlet /> */}
      {isDark && (
        <Helmet>
          <body className={`${isDark ? 'dark' : ''}`} />
        </Helmet>
      )}
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
        <div className={`style-switcher ${styleSwitcher ? 'open' : ''}`}>
          <div
            className="style-switcher-toggler s-icon"
            onClick={() => setStyleSwitcher(!styleSwitcher)}
          >
            <FontAwesomeIcon icon={faCog} spin size="2xs" />
          </div>
          <div className="day-night s-icon" onClick={() => setIsDark(!isDark)}>
            {isDark ? (
              <FontAwesomeIcon icon={faMoon} size="2xs" />
            ) : (
              <FontAwesomeIcon icon={faSun} size="2xs" />
            )}
          </div>
          <h4>Theme Colors</h4>
          <div className="colors">
            <span
              className="color-1"
              onClick={() => {
                getColor('color-1');
              }}
            ></span>

            <span
              className="color-2"
              onClick={() => {
                getColor('color-2');
              }}
            ></span>

            <span
              className="color-3"
              onClick={() => {
                getColor('color-3');
              }}
            ></span>

            <span
              className="color-4"
              onClick={() => {
                getColor('color-4');
              }}
            ></span>

            <span
              className="color-5"
              onClick={() => {
                getColor('color-5');
              }}
              // onclick="setActiveStyle('color-5')"
            ></span>
          </div>
        </div>
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
