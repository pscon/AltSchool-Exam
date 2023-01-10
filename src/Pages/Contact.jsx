import React, { useState } from "react";
const Contact = () => {
  const [formStatus, setFormStatus] = useState("Send");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();

    setFormStatus("Submitting...");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => {
      setFormStatus("Submited");
    }, 3000);
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact Us</h2>
      <form
        onSubmit={onSubmit}
        action="https://getform.io/f/a885bd3c-dfab-4b82-b6a2-8b25db456ca0"
        method="POST"
      >
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            name={form.name}
            type="text"
            id="name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            name="email"
            type="email"
            id="email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            id="message"
            required
          />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};
export default Contact;
