import React from "react";
import emailjs from "emailjs-com";
import AWN from "awesome-notifications";

import "./Contact.css";

export default function Contact() {
  const sendMail = (e) => {
    e.preventDefault();
    console.log("Sent");
    emailjs
      .sendForm(
        "service_sxnyewl",
        "template_yi1h8j5",
        e.target,
        "user_xh53W1CBKEfQx2X8FBALL"
      )
      .then(
        (result) => {
          console.log(result.text);
          new AWN().success('We have received your message, we will contact you as quickly as possible') 
        },
        (error) => {
            new AWN().warning('Somthing occured , try again later');
        }
      );
      e.target.reset();
  };

  return (
    <div className="wrapper">
      <div className="inner">
        <form onSubmit={sendMail}>
          <h3>Contact Us</h3>
          <label className="form-group">
            <input type="text" className="form-control" required name="name" />
            <span>Your Name</span>
            <span className="border"></span>
          </label>
          <label className="form-group">
            <input type="text" className="form-control" required name="email" />
            <span htmlFor="">Your Mail</span>
            <span className="border"></span>
          </label>
          <label className="form-group">
            <input name="subject" id="" className="form-control" required />
            <span htmlFor="">Subject</span>
            <span className="border"></span>
          </label>
          <label className="form-group">
            <textarea name="message" id="" className="form-control" required />
            <span htmlFor="">Your Message</span>
            <span className="border"></span>
          </label>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
