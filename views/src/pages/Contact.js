import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import Content from "../components/Content";

class Contact extends React.Component {
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
