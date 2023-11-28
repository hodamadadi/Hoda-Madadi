import React, { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';
import './contact.css';
export const Contact = () => {
  /*------------------------SEND EMAIL FUNCTION-------------------*/
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_5qftq6p',
        'template_5iajdwu',
        form.current,
        'ARLD11uI4guCCUWjP'
      )
      .then(
        result => {
          console.log(result.text);
          console.log('Message Send!');
        },
        error => {
          console.log(error.text);
        }
      );
  };
  return (
    /*-------------------------SECTION CONTACT--------------------*/
    <section id="contact" className=" contact container grid">
      <div class="container-con">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt fa-beat"></i>
              <div class="topic">Address</div>
              <div class="text-one">Refah, Herat, Afghanistan</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt fa-beat"></i>
              <div class="topic">Phone</div>
              <div class="text-one">+93 731062846</div>
              <div class="text-two">+93 744367704</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope fa-beat"></i>
              <div class="topic">Email</div>
              <div class="text-one">hodamadadi5@gmail.com</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">
              <h4 className=" animate-charcter">
                {' '}
                Get In Touch <i class="fa-regular fa-comment-dots"></i>
              </h4>
            </div>
            <p>
              Please fill in the form below if you want to work with me, you can
              send me message from here or cantact directly. It's my pleasure to
              work with you.
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <div class="input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="from_name"
                ></input>
              </div>
              <div class="input-box">
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="from_email"
                ></input>
              </div>
              <div class="input-box">
                <input
                  type="text"
                  placeholder="Enter your subject"
                  name="from_subject"
                ></input>
              </div>
              <div class="input-box message-box">
                <button className="btn-button" type="submit" value="send">
                  Send Message
                </button>
              </div>
              <div class="button"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
