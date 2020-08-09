import React from "react";
import SubmitButton from "../SubmitButton";
import InputField from "../InputField";
import Form from "react-bootstrap/Form";

class ContactForm extends React.Component {
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

  handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true,
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="full-name"> Full Name </Form.Label>
          <Form.Control
            id="full-name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email"> Email </Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="message"> Message </Form.Label>
          <Form.Control
            id="message"
            name="message"
            as="textarea"
            rows="4"
            value={this.state.message}
            onChange={this.handleChange}
          ></Form.Control>
        </Form.Group>

        <SubmitButton
          text="Send"
          disabled={this.state.buttonDisabled}
          onClick={this.handleSubmit}
        />

        {this.state.emailSent === true && (
          <p className="d-inline success-msg ">Email Sent</p>
        )}
        {this.state.emailSent === false && (
          <p className="d-inline err-msg ">Email NOT Sent</p>
        )}
      </Form>
    );
  }
}

export default ContactForm;
