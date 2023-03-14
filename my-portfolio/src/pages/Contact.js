import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button, Col, Row, Form, ListGroup } from "react-bootstrap";
import emailjs from "emailjs-com";



const Contact = () => {
  const [validated, setValidated] = useState(false);
const [sendName, setSendName] = useState("");
const [sendEmail, setSendEmail] = useState("");
const [sendMessage, setSendMessage] = useState("");
const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault()




        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    .then(res=>{
    console.log(res);
    })
    .catch(err=> console.log(err))
    
    setSendName("");
    setSendEmail("");
    setSendMessage("");
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
            <Form noValidate validated={validated}  onSubmit={(e)=> handleSubmit(e)} ref={form}>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Name" onChange={(e)=> setSendName(e.target.value)} value={sendName} name="Name"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Email" onChange={(e)=> setSendEmail(e.target.value)} value={sendEmail}name="Email"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom03">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" required placeholder="Message" onChange={(e)=> setSendMessage(e.target.value)} value={sendMessage}name="Message"/>
              </Form.Group>
              <input type="submit" value="Senden" className="btn btn-primary" />

            </Form>
          </div>
        </Col>
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
            
         </div>
       </Col>
     </Row>
   </motion.div>
  );
};

export default Contact;

// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import emailjs from "emailjs-com";

// function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         e.target,
//         process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           // Optionally, show a success message to the user
//         },
//         (error) => {
//           console.log(error.text);
//           // Optionally, show an error message to the user
//         }
//       );
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="name">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your name"
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="email">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="message">
//           <Form.Label>Message</Form.Label>
//           <Form.Control
//             as="textarea"
//             name="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Enter your message"
//             rows={3}
//             required
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>

//     </>
//   );
// }

// export default ContactForm;