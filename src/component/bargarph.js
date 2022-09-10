import React from 'react';
import "./bar.scss";
import { Footer } from './Footer';
import Graph from './graph';
import { Image } from './Image';



function Bargarph() {
 
  return (
    <>
      {/* navbar */}

      <section className="hero" id="about">
        <Image />
        <div className="bio animate__animated animate__shakeX">
          <h2 className="bio-title">About Me</h2>
          <p className="bio-text">
            Hey,<br />
            Myself Sanchit. I'm  a <b> Web Developer </b> by profession and freelance web developer also.
          </p>
        </div>
      </section>

      <section className="more-about">
        <h2>More About Me</h2>
        <p>
          Hello There,<br />
          Myself Sanchit. I'm  a <b> Web Developer </b> by profession and freelance web developer also.
        </p>
        <h4><b>Educational Qualification</b> </h4>
        <p>
          Currently I'm persuing 3rd year of my diploma in Infomation Technology which is equivalent
          to 12th.
          My diploma course will complete in year 2023.
          After that I'm planning to complete my Graduation (b.tech in cs).
        </p>
        <p>

        </p>
      </section>


      {/* skill section */}

      <section className="skills" id="skills">
        <h2 className="skill-header">My Top Skills</h2>

        <div className="skills-wrapper">
          <div className="first-set animate__animated animate__pulse">
            <img id='html'
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJozs_sJVTyP4vc4VdiBioZqYoPJ-EJRnw1g&usqp=CAU"
              alt="html"
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
              alt="css"
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png"
              alt="javascript"
              loading="lazy"
              className="icon icon-card"
            />
          </div>

          <div className="second-set animate__animated animate__pulse">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
              alt="bootstrap"
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="https://ionicframework.com/docs/icons/logo-react-icon.png"
              alt="react"
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="https://banner2.cleanpng.com/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg"
              alt="node"
              loading="lazy"
              className="icon icon-card"
            />
          </div>
          <div className="second-set animate__animated animate__pulse">
            <img
              src="https://www.electrosoftsystem.com/admin/cources/c-tutorial-for-beginners.png"
              alt="c programming"
              loading="lazy"
              className="icon icon-card"
            />   <img
              src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png"
              alt="python"
              loading="lazy"
              className="icon icon-card"
            />
          </div>
        </div>
      </section>

      {/*graph */}

 <Graph/>
      
      {/* Contact Information */}
      <section className="contact" id="contact">
        <h2>Get In Touch With Me</h2>
        <div className="contact-form-container">
          <div className="contact-form">
            <form action="https://formspree.io/f/xyylngw" method="POST">
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="sender-name"
                  placeholder="Enter Your Name"
                  className="input-field"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="sender-email"
                  placeholder="Enter Your Email"
                  className="input-field"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  cols="60"
                  rows="10"
                  placeholder="Enter Your Message"
                  name="message"
                  className="input-field"
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                id="submit-btn"
                className="submit-btn"
              />
            </form>
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}

export default Bargarph