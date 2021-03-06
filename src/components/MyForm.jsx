import React from "react";
import "../styling/contact.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xoqkkoaa"
        method="POST"
        className="contact-form"
      >
        <p className="heading">Want to drop me a line?</p>
        <iframe
          src="https://giphy.com/embed/1zi11igSWu5IHaEbOt"
          width="250"
          height="250"
          frameBorder="0"
          className="giphy-embed"
          title="fish"
          allowFullScreen
        ></iframe>
        <label>name</label>
        <input className="form-styling" type="text" name="name" />
        <label>email</label>
        <input className="form-styling" type="text" name="email" />
        <label>message</label>
        <textarea type="text" name="message" />
        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <button className="submit-button" type="submit">
            Submit
          </button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
