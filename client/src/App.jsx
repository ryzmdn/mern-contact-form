import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const formStyle = {
  color: "white",
  maxWidth: "56rem",
  margin: "2rem auto",
  padding: "2rem",
};

export default function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
      agree: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
      agree: Yup.boolean().oneOf([true], "You must agree to the policy"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await fetch("http://localhost:4000/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        alert(data.message || "Message sent successfully!");
        resetForm();
      } catch (error) {
        alert(error.message || "Failed to send message");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div style={formStyle} className="bg-body rounded-3 border-dark shadow-sm">
      <header className="w-100 border-bottom border-body">
        <h1 className="fs-1 fw-bold text-dark">Contact Form</h1>
        <p className="fs-6 text-dark">You can enter your personal data into the input provided below.</p>
      </header>

      <Form noValidate onSubmit={formik.handleSubmit} className="d-flex flex-column row-gap-2 w-100 py-2">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="firstName">
            <Form.Label className="text-dark">First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              autoComplete="off"
              spellCheck={false}
              isInvalid={formik.touched.firstName && !!formik.errors.firstName}
              {...formik.getFieldProps("firstName")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="lastName">
            <Form.Label className="text-dark">Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your last name"
              autoComplete="off"
              spellCheck={false}
              isInvalid={formik.touched.lastName && !!formik.errors.lastName}
              {...formik.getFieldProps("lastName")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="text-dark">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email"
            autoComplete="off"
            spellCheck={false}
            isInvalid={formik.touched.email && !!formik.errors.email}
            {...formik.getFieldProps("email")}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label className="text-dark">Phone number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Your phone number"
            autoComplete="off"
            spellCheck={false}
            isInvalid={
              formik.touched.phoneNumber && !!formik.errors.phoneNumber
            }
            {...formik.getFieldProps("phoneNumber")}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.phoneNumber}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="subject">
          <Form.Label className="text-dark">Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Subject"
            autoComplete="off"
            spellCheck={false}
            isInvalid={formik.touched.subject && !!formik.errors.subject}
            {...formik.getFieldProps("subject")}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.subject}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label className="text-dark">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write your message here"
            style={{ resize: "none" }}
            autoComplete="off"
            spellCheck={false}
            isInvalid={formik.touched.message && !!formik.errors.message}
            {...formik.getFieldProps("message")}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="agree">
          <Form.Check
            type="switch"
            label="By selecting this, you agree to our privacy policy."
            className="text-dark"
            autoComplete="off"
            spellCheck={false}
            isInvalid={formik.touched.agree && !!formik.errors.agree}
            {...formik.getFieldProps("agree")}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.agree}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
