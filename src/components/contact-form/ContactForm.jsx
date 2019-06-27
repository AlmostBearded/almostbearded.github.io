import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactForm = () => {
  return (
    <Form
      action="https://formspree.io/thealmostbearded@gmail.com"
      method="POST"
    >
      <Form.Group controlId="contactName">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Your name" name="name" />
      </Form.Group>
      <Form.Group controlId="contactEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your email address"
          name="email"
        />
      </Form.Group>
      <Form.Group controlId="contactMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          placeholder="Hi Peter, ..."
          name="message"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send Message
      </Button>
    </Form>
  );
};

export default ContactForm;
