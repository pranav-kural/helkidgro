import { Form } from "react-bootstrap";
import contact_data from "../resources/contact_data";
import SleekPageHeader from "./utility/SleekPageHeader";

export default function ContactPage({ lang }) {
  return (
    <div className="container my-5">
      <SleekPageHeader
        title={contact_data[lang].title}
        subtitle={contact_data[lang].subtitle}
      />
      <div className="container w-50">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{contact_data[lang].contact_form.name}</Form.Label>
            <Form.Control
              type="text"
              placeholder={contact_data[lang].contact_form.name_placeholder}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{contact_data[lang].contact_form.email}</Form.Label>
            <Form.Control
              type="email"
              placeholder={contact_data[lang].contact_form.email_placeholder}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{contact_data[lang].contact_form.message}</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={contact_data[lang].contact_form.message_placeholder}
            />
          </Form.Group>
          <button
            variant="primary"
            type="submit"
            className="btn bg-color-primary text-color-white bg-color-primary-on-hover"
          >
            {contact_data[lang].contact_form.message_placeholder}
          </button>
        </Form>
      </div>
    </div>
  );
}
