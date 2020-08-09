import React from "react";
import SubmitButton from "../SubmitButton";
import InputField from "../InputField";

const ContactForm = () => {
  return (
    <div className="contactForm">
      <InputField type="text" placeholder="Name" />
      <InputField type="email" placeholder="Email" />
      <SubmitButton text="Send" />
    </div>
  );
};

export default ContactForm;
