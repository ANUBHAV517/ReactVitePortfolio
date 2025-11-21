import React from 'react';
import Timer from '../component/timer';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useIsMobile from '../hook/useIsMobile';
import { faCode, faRocket, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import WithSidebar from '../component/WithSidebar';

function Services({ sidebarOpen, isMobile }) {
  // const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);
  // const isMobile = useIsMobile();
  return (
    <>
      <section
        className={`service section ${
          !isMobile ? (sidebarOpen ? 'open' : '') : ''
        }`}
        id="services"
      >
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <FontAwesomeIcon icon={faCode} className="fa" />
                </div>
                <h4>Custom Frontend Development</h4>
                <p>
                  I create clean, responsive, and scalable user interfaces using
                  HTML, CSS, and JavaScript. My focus is on building
                  pixel-perfect layouts, ensuring cross-browser compatibility,
                  and following modern UI design principles. I implement
                  component-based architecture for better maintainability,
                  reusability, and long-term scalability of the codebase.
                </p>
              </div>
            </div>

            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <FontAwesomeIcon icon={faReact} className="fa" />
                </div>
                <h4>React.js Application Development</h4>
                <p>
                  I develop high-performance single-page applications using
                  React.js, following best practices like efficient state
                  management, reusable components, and optimized rendering. I
                  work extensively with APIs, Redux/Context, custom hooks, and
                  performance tuning techniques to deliver fast, interactive,
                  and user-centric applications.
                </p>
              </div>
            </div>

            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <FontAwesomeIcon icon={faRocket} className="fa" />
                </div>
                <h4>Next.js Based Web Solutions</h4>
                <p>
                  I build robust and SEO-optimized web applications using
                  Next.js, leveraging features like server-side rendering (SSR),
                  static site generation (SSG), routing, and API routes. My
                  focus is on delivering fast-loading, production-ready
                  applications with improved SEO, scalability, and user
                  experience.
                </p>
              </div>
            </div>

            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <FontAwesomeIcon icon={faTools} className="fa" />
                </div>
                <h4>Website Enhancement & Optimization</h4>
                <p>
                  I enhance existing websites by improving UI/UX, restructuring
                  code, reducing bundle size, and optimizing performance metrics
                  like load time and CLS. I perform audits, fix layout issues,
                  optimize images/assets, and ensure smooth performance across
                  all devices and browsers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>{' '}
      <Outlet />
    </>
  );
}

export default WithSidebar(Services);
