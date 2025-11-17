import { faMessage, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nmjfc6m',
        'template_num5q2k',
        form.current,
        'Kyz2aO-krng4Ydn6q'
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          e.target.reset(); // clear form after submit
        },
        (error) => {
          alert('Failed to send message, please try again.');
        }
      );
  };
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">Have You Any Question ?</h3>
        <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICE</h4>
        <div className="row" style={{ justifyContent: 'center' }}>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <FontAwesomeIcon icon={faMobile} className="fa" />
            </div>
            <h4>Call Us On</h4>
            <p>+91 8459460982</p>
          </div>

          {/* <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-map-marker-alt"></i>
            </div>
            <h4>Office</h4>
            <p>Kanpur</p>
          </div> */}

          <div className="contact-info-item padd-15">
            <div className="icon">
              <FontAwesomeIcon icon={faMessage} className="fa" />
            </div>
            <h4>Email</h4>
            <p>anusriknp@gmail.com</p>
          </div>

          {/* <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-globe-europe"></i>
            </div>
            <h4>Website</h4>
            <p>this.com</p>
          </div> */}
        </div>
        <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-title padd-15">
          I'M VERY RESPONSIVE TO MESSAGES
        </h4>
        <div className="row">
          <div className="contact-form padd-15">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      id="name"
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="e-mail"
                      id="email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      id="subject"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      // name=""
                      className="form-control"
                      placeholder="Message"
                      name="message"
                      id="message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
