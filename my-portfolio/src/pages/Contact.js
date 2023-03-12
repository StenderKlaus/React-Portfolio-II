import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Col, Row, Form, ListGroup } from "react-bootstrap";
//import emailjs from "emailjs/browser";



const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <motion.div
      className="contact"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <h2>Contact</h2>
      <Row>
        <Col>
          <div className="contact-form">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label></Form.Label>
                <Form.Control required type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom03">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" required placeholder="Message" />
              </Form.Group>
              <Button type="submit" onclick="window.location.href = 'https://de.mail.yahoo.com/d/folders/1?guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMio6ODUlyYyrdeEDaYmAaIi5uhwRXCIpiscQYxM1bivMipV1Nw4CCwOp6-0s9M9USkLAjt6qOuRiTTa4RZeZnM-7Mv6CvJgTD7kjyDsDjh43nQxF1NIDE5OFr6tLIl-mLRrtc9TAy6AUR0ngxhXZdTrrK3vZaum5SlEUXdtJLq_'">Submit form</Button>
            </Form>
          </div>
        </Col>

{/** 

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name:</Label>
        <Input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email:</Label>
        <Input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="message">Message:</Label>
        <Input type="textarea" name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </FormGroup>
      <Button color="primary" type="submit">Send</Button>
    </Form>
  );
}

export default Contact; */}






        <Col>
          <div className="contact-data">
            <p>
              Möchten Sie mit mir über eins meiner Projekte sprechen? — email an
              stender.klaus@yahoo.de.
            </p>
            <p>Ich kann Ihnen helfen, eine Website zu gestalten, ein neues Produkt zu entwerfen, ein bestehendes Produkt zu verbessern, ein starkes Designsystem aufzubauen, Erstellung von Websites für Ihr Unternehmen.
            </p>
            <p>
              Ich wohne in Hamburg  — und bin ab Juli 2023 bevorzugt im Home-Office Vollzeit für Sie da.
            </p>
            <p>
              <ListGroup horizontal>
                <ListGroup.Item>
                  <a href="https://github.com/StenderKlaus">Github </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://www.linkedin.com/in/klaus-stender-7ba879266/">Linkedin</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://app.instaffo.com/candidate/profile">
                    Instaffo
                  </a>
                </ListGroup.Item>

              </ListGroup>
            </p>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Contact;