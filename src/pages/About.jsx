import React from 'react';
import { useSelector } from 'react-redux';
import useIsMobile from '../hook/useIsMobile';
import { Link } from 'react-router-dom';

function About() {
  const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);
  const isMobile = useIsMobile();
  return (
    <>
      <section
        className={`about section ${
          !isMobile ? (sidebarOpen ? 'open' : '') : ''
        }`}
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h3>
                    I'm Anubhav Srivastava and <span>Software Developer</span>
                  </h3>
                  <p>
                    Software Developer with a demonstrated history of success in
                    full lifecycle development. Proficient in modern
                    technologies, adept at problem-solving, and committed to
                    delivering efficient, user- friendly solutions. Seeking
                    opportunities to contribute expertise and drive innovation
                    in a collaborative team environment.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Birthday : <span>10 Jul 1995</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Age : <span>28</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Mobile : <span>8459460982</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>anusriknp@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>MCA</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Address :<span>128/615 Y-1 Kidwai Nagar</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Linkedin :
                        <span>https://www.linkedin.com/in/anubhav10/</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Pan : <span>GUGPS2840E</span>
                      </p>
                    </div>

                    <div className="info-item padd-15">
                      <p>
                        Country : <span>India</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        State : <span>Uttar Pradesh</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Kanpur</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Pincode : <span>208011</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      {/* <a
                        href="#contact"
                        data-section-index="1"
                        className="btn hire-me"
                      >
                        Hire Me
                      </a> */}
                      <Link to={'/contact'} className="btn hire-me">
                        {' '}
                        Hire Me
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="skills">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>React</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: '85%' }}
                        ></div>
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Redux</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: '85%' }}
                        ></div>
                        <div className="skill-percent">55%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>JavaScript</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: '85%' }}
                        ></div>
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>BootStrap</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: '70%' }}
                        ></div>
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>CSS</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: '75%' }}
                        ></div>
                        <div className="skill-percent">75%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>TailwindCss</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: '60%' }}
                        ></div>
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>HTML</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: '90%' }}
                        ></div>
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Git/Github</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: '60%' }}
                        ></div>
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Node</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: '40%' }}
                        ></div>
                        <div className="skill-percent">40%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2017 - 2019
                          </h3>
                          <h4 className="timeline-title">
                            Master's in Computer Application | 74% Aggregate
                          </h4>
                          <p className="timeline-text">
                            Dr. Virendra Swarup Institute of Computer Studies,
                            Kanpur Affiliated with Dr. A.P.J. Abdul Kalam
                            Technical University (AKTU), Lucknow, Uttar Pradesh.
                          </p>
                          {/* <p
                            className="timeline-text"
                            style={{ marginTop: '10px' }}
                          >
                            Dr. Virendra Swarup Institute of Computer Studies,
                            Kanpur Affiliated with Dr. A.P.J. Abdul Kalam
                            Technical University (AKTU), Lucknow, Uttar Pradesh
                          </p> */}
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2012 - 2015
                          </h3>
                          <h4 className="timeline-title">
                            Bachelor in Computer Application | 64% Aggregate
                          </h4>
                          <p className="timeline-text">
                            Dr. Virendra Swarup Institute of Computer Studies,
                            Kanpur Affiliated with Chhatrapati Shahu Ji Maharaj
                            University (CSJM), Kanpur, Uttar Pradesh.
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2011 - 2012
                          </h3>
                          <h4 className="timeline-title">
                            Senior Secondary Education | 66% Aggregate
                          </h4>
                          <p className="timeline-text">
                            Saraswati Vidya Mandir Inter College, Govind Nagar,
                            Kanpur, Uttar Pradesh Affiliated with Uttar Pradesh
                            Board of High School and Intermediate Education (UP
                            Board).
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2009 - 2010
                          </h3>
                          <h4 className="timeline-title">
                            Matriculation | 68% Aggregate
                          </h4>
                          <p className="timeline-text">
                            Saraswati Vidya Mandir Higher Secondary School,
                            Keshavpuram, Kanpur, Uttar Pradesh Affiliated with
                            Uttar Pradesh Board of High School and Intermediate
                            Education (UP Board).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> Jan 2021 - Oct
                            2021
                          </h3>
                          <h4 className="timeline-title">
                            TEXTANALOG (
                            <a href="https://textanalog.com">Click to Visit</a>)
                          </h4>
                          <h3 className="timeline-title">
                            Designation - Web Designer
                          </h3>
                          <p className="timeline-text">
                            Experienced in developing websites using WordPress
                            and Elementor, including e-commerce and portfolio
                            sites, as well as performing full website migrations
                            with complete database transfer and configuration.
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> Oct 2021 - Mar
                            2024
                          </h3>
                          <h4 className="timeline-title">
                            CEDCOSS (
                            <a href="https://cedcoss.com/">Click to Visit</a> )
                          </h4>
                          <h3 className="timeline-title">
                            Designation - Software Engineer{' '}
                          </h3>
                          <p className="timeline-text">
                            Developed multiple SaaS based applications from
                            scratch. Proficient in the conception, design, and
                            implementation of multiple Software as a Service
                            (SaaS) applications, built entirely from inception
                            to deployment.
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> Nov 2024 - Aug
                            2025
                          </h3>
                          <h4 className="timeline-title">
                            CYBERPOINT(
                            <a href="https://cedcoss.com/">Click to Visit</a> )
                          </h4>
                          <h3 className="timeline-title">
                            Designation - React Developer{' '}
                          </h3>
                          <p className="timeline-text">
                            Responsible for developing the frontend of a
                            consultancy platform that connects users with
                            experts via real-time messaging, audio, and video
                            calls. Built the application using Next.js, focusing
                            on performance, SEO, and smooth client-server
                            interaction.
                          </p>
                        </div>
                        {/* <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2017 - 2019
                          </h3>
                          <h4 className="timeline-title">
                            Master's in Computer Application
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis,
                          </p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
