import React from 'react';
import TICTACTOE from '../component/tic-tac-toe';
import Sidebar from '../component/Sidebar';
import { useSelector } from 'react-redux';
import myImage from '../image/myimg.png';
import useIsMobile from '../hook/useIsMobile';
function Home() {
  const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);
  const isMobile = useIsMobile();

  const base = import.meta.env.VITE_LOCAL_URL || '/';
  console.log('base', base);
  return (
    <>
      {/* <Sidebar /> */}
      {/* <TICTACTOE /> */}
      <section
        className={`home active section ${
          !isMobile ? (sidebarOpen ? 'open' : '') : ''
        } `}
        id="home"
      >
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                Hi, my name is <span className="name">Anuhav Srivastava</span>
              </h3>
              <h3 className="my-profession">
                I' m a <span className="typing">Software Developer</span>
              </h3>
              <p>
                I'm a Software Developer with extensive experience for over 10
                years.My expertise is to create websites and develope a React
                Integration app and many more....
              </p>
              <a
                className="btn"
                href={`${base}/assets/AnubhavResume.pdf`}
                download="Anubhav_Srivastava_CV.pdf"
              >
                Download Resume
              </a>
            </div>
            <div className="home-img padd-15">
              <img src={myImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
