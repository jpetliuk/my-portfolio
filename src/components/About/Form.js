import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (verifyContent() === false) return;

    emailjs
      .sendForm(
        "service_9qasuo7",
        "template_2b1xogn",
        form.current,
        "P2J3t9pDbTD7o7l8s"
      )
      .then(
        (result) => {
          console.log(result.text);
          document.getElementById("name").readOnly = true;
          document.getElementById("email").readOnly = true;
          document.getElementById("message").readOnly = true;
          document.getElementById("submitButton").type = "text";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const verifyContent = () => {
    const email = document.getElementById("email").value;
    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (document.getElementById("name").value.length < 3) return false;
    if (document.getElementById("message").value.length < 10) return false;
    if (!emailRegex.test(email)) return false;
    else return true;
  };

  return (
    <form ref={form} autocomplete="off" onSubmit={sendEmail}>
      <label>Name*</label>
      <input id="name" type="text" name="user_name" onChange={verifyContent} />
      <label>Email*</label>
      <input id="email" type="email" name="user_email" required />
      <label>Message*</label>
      <textarea id="message" name="message" required />
      <input id="submitButton" type="submit" value="Send Message" />
    </form>
  );
};

export default Form;
