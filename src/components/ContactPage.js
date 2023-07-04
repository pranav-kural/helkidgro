import { Form, InputGroup } from "react-bootstrap";
import contact_data from "../resources/contact_data";
import SleekPageHeader from "./utility/SleekPageHeader";
import { useState } from "react";

export default function ContactPage({ lang }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container my-5">
      <SleekPageHeader
        title={contact_data[lang].title}
        subtitle={contact_data[lang].subtitle}
      />
      <div className="container w-50">
        {submitted ? (
          <div className="alert alert-success" role="alert">
            Thank you for your message! We will get back to you as soon as
            possible.
          </div>
        ) : (
          <Form onSubmit={() => setSubmitted(true)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{contact_data[lang].contact_form.name}</Form.Label>
              <Form.Control
                type="text"
                placeholder={contact_data[lang].contact_form.name_placeholder}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3 has-validation"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>{contact_data[lang].contact_form.email}</Form.Label>
              <Form.Control
                type="email"
                placeholder={contact_data[lang].contact_form.email_placeholder}
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                required
              />
              <div className="mt-2 text-color-light">
                format: name@example.com
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>{contact_data[lang].contact_form.message}</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder={
                  contact_data[lang].contact_form.message_placeholder
                }
                required
              />
            </Form.Group>
            <Form.Group
              className="d-flex justify-content-around align-items-center"
              controlId="exampleForm.ControlInput1"
            >
              <button
                variant="primary"
                type="submit"
                className="btn bg-color-primary text-color-white bg-color-primary-on-hover px-md-5"
              >
                {contact_data[lang].contact_form.submit}
              </button>
              <button
                variant="primary"
                type="reset"
                className="btn bg-color-primary text-color-white bg-color-primary-on-hover px-md-5"
              >
                {contact_data[lang].contact_form.reset}
              </button>
            </Form.Group>
          </Form>
        )}
      </div>
    </div>
  );
}
