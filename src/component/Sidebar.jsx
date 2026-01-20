import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faComments,
  faDiagramProject,
  faHome,
  faList,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import useIsMobile from '../hook/useIsMobile';
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';
import { updateSideBar } from '../redux/slice/SidebarSlice';
import { faRProject } from '@fortawesome/free-brands-svg-icons';
function Sidebar() {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);
  //   const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  console.log(sidebarOpen, 'sidebarOpen isMobile', isMobile);

  //   const toggleAside = () => {
  //     setIsOpen(!isOpen);
  //   };

  //   const navTogglerBtn = document.querySelector('.nav-toggler'),
  //     aside = document.querySelector('.aside');

  //   navTogglerBtn.addEventListener('click', () => {
  //     asideSectionTogglerBtn();
  //   });
  //   function asideSectionTogglerBtn() {
  //     aside.classList.toggle('open');
  //     navTogglerBtn.classList.toggle('open');
  //     for (let i = 0; i < totalSection; i++) {
  //       allSection[i].classList.toggle('open');
  //     }
  //   }
  return (
    <>
      <div className={`aside${sidebarOpen ? ' open' : ''}`}>
        <div className="logo">
          <a href="#">
            <span>A</span>nubhav
          </a>
        </div>
        <div
          className={`nav-toggler ${sidebarOpen ? ' open' : ''}`}
          onClick={() => dispatch(updateSideBar())}
        >
          <span></span>
        </div>
        {/* <ul className="nav">
        <li>
          <a
            href="#home"
            className="menu active"
            title="home"
            // onClick="setActiveLink('home')"
          >
            <i className="fa fa-home"></i>Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="menu"
            title="about"
            // onClick="setActiveLink('about')"
          >
            <i className="fa fa-user"></i>About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="menu"
            title="services"
            // onClick="setActiveLink('services')"
          >
            <i className="fa fa-list"></i>Services
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="menu"
            title="portfolio"
            // onClick="setActiveLink('portfolio')"
          >
            <i className="fa fa-briefcase"></i>Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="menu"
            title="contact"
            // onClick="setActiveLink('contact')"
          >
            <i className="fa fa-comments"></i>Contact
          </a>
        </li>
      </ul> */}
        <ul className="nav">
          <li>
            <NavLink
              className="menu"
              to={'/'}
              onClick={() => dispatch(updateSideBar())}
            >
              <FontAwesomeIcon icon={faHome} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="menu"
              to={'about'}
              onClick={() => dispatch(updateSideBar())}
            >
              <FontAwesomeIcon icon={faUser} />
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="menu"
              to={'services'}
              onClick={() => dispatch(updateSideBar())}
            >
              <FontAwesomeIcon icon={faList} />
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className="menu"
              to={'projects'}
              onClick={() => dispatch(updateSideBar())}
            >
              <FontAwesomeIcon icon={faDiagramProject} />
              Projects
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              className="menu"
              to={'/miniProjects'}
              onClick={() => dispatch(updateSideBar())}
            >
              <FontAwesomeIcon icon={faBriefcase} />
              Mini Projects
            </NavLink>
          </li> */}
          <li>
            <NavLink
              className="menu"
              to={'/list'}
              onClick={() => dispatch(updateSideBar())}
            >
              <FontAwesomeIcon icon={faComments} />
              List
            </NavLink>
          </li>
          <li>
            <NavLink
              className="menu"
              to={'/contact'}
              onClick={() => dispatch(updateSideBar())}
            >
              <FontAwesomeIcon icon={faComments} />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
