import React, { useEffect, useRef } from 'react';
import TICTACTOE from '../component/tic-tac-toe';
import Sidebar from '../component/Sidebar';
import { useSelector } from 'react-redux';
import myImage from '../image/myimg.png';
import useIsMobile from '../hook/useIsMobile';
import WithSidebar from '../component/WithSidebar';
import Typed from 'typed.js';
function Home({ sidebarOpen, isMobile }) {
  // const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);
  // const isMobile = useIsMobile();

  const base = import.meta.env.VITE_LOCAL_URL || '/';
  console.log(isMobile, 'base', sidebarOpen);
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Software Developer', 'React Developer', 'Frontend Developer'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed(typedRef.current, options);

    // Destroy Typed instance on unmounting to cleanup
    return () => {
      typed.destroy();
    };
  }, []);
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
                I' m a <span className="typing" ref={typedRef}></span>
              </h3>
              <p>
                I have 3 years and 11 months of experience in frontend web
                development with strong expertise in HTML5, CSS3, Bootstrap,
                React.js, and Next.js. I specialize in building responsive,
                user-friendly, and performance-optimized web applications. Over
                the years, I have worked on multiple projects involving modern
                UI design and clean, maintainable code. I’m passionate about
                learning new technologies and currently looking for
                opportunities to further enhance my skills and contribute to
                innovative web solutions.
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
      {/* <div style={{ border: '1px solid red', padding: '10px' }}>
        <div style={{ display: 'contents' }}>
          <p style={{ border: '1px solid blue' }}>
            This paragraph is shown as if its parent div disappeared.
          </p>
        </div>
      </div>
      <h2 style={{ display: 'run-in' }}>Section title</h2>
      <p>
        This paragraph follows the run-in heading and may cause the heading to
        display inline with it.
      </p> */}
    </>
  );
}

export default WithSidebar(Home);
