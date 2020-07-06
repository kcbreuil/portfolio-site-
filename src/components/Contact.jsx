import React from "react";
import "../styling/contact.css";

const Contact = () => {
  return (
    <div>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Message:
          <textarea type="text" name="message" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
