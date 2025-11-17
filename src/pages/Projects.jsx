import React from 'react';
import { useSelector } from 'react-redux';
import useIsMobile from '../hook/useIsMobile';
import { Link } from 'react-router-dom';

function Projects() {
  const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);
  const isMobile = useIsMobile();
  return (
    <section
      className={`portfolio section ${
        !isMobile ? (sidebarOpen ? 'open' : '') : ''
      }`}
      id="portfolio"
    >
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Projects</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>Company Projects</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-content">
                <h3 className="project-title">Advor</h3>
                <p className="project-desc">
                  Advor is a versatile consultancy platform that connects
                  experts with clients. Experts can monetize their knowledge by
                  offering paid services in their specialized fields, while
                  clients can access guidance through chat, audio, and video
                  calls, ensuring seamless, real-time consultation, personalized
                  support, and efficient problem-solving anytime, anywhere.
                </p>
                <p className="project-tech">
                  <strong>Tech Used:</strong> Next.js, Socket.io, PeerJS, Redux,
                  TailwindCSS, HTML
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-content">
                <h3 className="project-title">
                  WooCommerce Miravia Integration
                </h3>
                <p className="project-desc">
                  Effortlessly sell on Miravia from your WooCommerce store with
                  CedCommerce's WooCommerce to Miravia Integration. This
                  powerful app enables seamless synchronization between your
                  WooCommerce store and the Miravia marketplace, making it easy
                  to upload products in bulk, manage orders, and keep inventory
                  synced in near real-time.
                </p>
                <p className="project-tech">
                  <strong>Tech Used:</strong> React, TailwindCSS, JavaScript,
                  Redux, HTML, DesignSystem
                </p>
              </div>
            </div>
          </div>

          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-content">
                <h3 className="project-title">CedCommerce TikTok Shop</h3>
                <p className="project-desc">
                  Designed for TikTok Shop, this Integration automates your
                  workflow to simplify product listing, inventory syncing, and
                  order fulfillment. The integration improves operational
                  efficiency with centralized listing ,order, inventory, &
                  return/refund management. Optimize operations with features
                  like pricing and inventory rules to avoid stockouts,
                  meta-attributes for enhanced product details, and bundle
                  product order management. Benefit from 24/7 expert support to
                  keep your store running seamlessly.
                </p>
                <p className="project-tech">
                  <strong>Tech Used:</strong> React, Redux, Bootstrap,
                  JavaScript, Css, HTML
                </p>
              </div>
            </div>
          </div>

          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-content">
                <h3 className="project-title">
                  CedCommerce AliExpress Integration
                </h3>
                <p className="project-desc">
                  AliExpress Automation Suite streamlines seller operations with
                  One Click Bulk Upload, Automated Inventory Management, and
                  Simplified Product Listing. It supports Advanced Category
                  Templates, Near Real-time Synchronization, and Advanced Order
                  Management, providing faster setup, accurate updates, and a
                  centralized dashboard for smooth, efficient store management.
                </p>
                <p className="project-tech">
                  <strong>Tech Used:</strong> React, Css, HTML, API Integration
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>Personal Projects</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-content">
                <h3 className="project-title">
                  Professional Portfolio Web Application
                </h3>
                <p className="project-desc">
                  A modern, responsive React-based portfolio website designed to
                  showcase a professional developer’s complete profile. The
                  portfolio highlights work experience, technical skills,
                  project showcases, contact options, and downloadable CV
                  functionality, providing a comprehensive digital resume.
                </p>
                <p className="project-tech">
                  <strong>Tech Used:</strong> React.js, Redux , React Router,
                  CSS, EmailJS (for contact form), Vite or Create React App, PDF
                  download integration
                </p>
                <p className="project-link">
                  <strong>Link:</strong>{' '}
                  <Link to="https://anubhav517.github.io/React-Portfolio">
                    Click to Visit
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
