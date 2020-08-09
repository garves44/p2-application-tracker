import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import Content from "../components/Content";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }
  render() {
    return (
      <div>
        <Hero title={"Contact Us!"} text={"Please fill out the form below!"} />
        <Content>
          <ContactForm />
        </Content>
      </div>
    );
  }
}

export default Contact;
