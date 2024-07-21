import React from "react";
import "./addTask.css";
import { Button, Card, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "@fontsource/poppins";

function AddTask() {
  const assignees = [
    { value: 1, label: "SUPER ADMIN" },
    { value: 2, label: "MR.ALI" },
    { value: 3, label: "TANIA" },
    { value: 4, label: "BASA" },
    { value: 5, label: "JAWERIA" },
    { value: 6, label: "ADEEL" },
    { value: 7, label: "FEMI" },
    { value: 8, label: "DANISH SIDDIQ CHOWDARY" },
  ];

  const cases = [
    { value: 1, label: "ANIA v/s SHAUGHIN" },
    { value: 2, label: "KATTAPPA v/s BAHU" },
    { value: 3, label: "IFRAGH" },
    { value: 4, label: "ABC1123" },
  ];
  return (
    <Container fluid="md" className="mt-5 AddTaskContainer font-poppins">
      <h3>Add Task</h3>
      <Card fluid="md" className="p-3">
        <Row>
          <Form.Group className="mb-2" controlId="formBasicName">
            <Form.Label as="small">
              TITLE <span className="star">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="TITLE"
              name="name"
              className="rounded-form-control"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-2" controlId="formBasic" as={Col}>
            <Form.Label as="small">
              CASE <span className="star">*</span>
            </Form.Label>
            <Form.Control
              as="select"
              className="form-select rounded-form-control"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>Select Case</option>
              {cases.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasic" as={Col}>
            <Form.Label as="small">
              ASSIGNEE<span className="star">*</span>
            </Form.Label>
            <Form.Control
              as="select"
              className="form-select rounded-form-control"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>Select User</option>
              {assignees.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-2" controlId="formBasic" as={Col}>
            <Form.Label as="small">
              PRIORITY<span className="star">*</span>
            </Form.Label>
            <Form.Control
              as="select"
              className="form-select rounded-form-control"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option value="0" selected>
                LOW
              </option>
              <option value="1">MEDIUM</option>
              <option value="2">HIGH</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasic" as={Col}>
            <Form.Label as="small">DUE DATE</Form.Label>
            <Form.Control
              type="date"
              placeholder="2024-07-24 7:50"
              name="date"
              className="rounded-form-control"
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-2" controlId="formBasic">
          <Form.Label as="small">DESCRIPTION</Form.Label>
          <Form.Control type="text" name="description" as="textarea" />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary">CREATE</Button>
        </div>
      </Card>
    </Container>
  );
}

export default AddTask;
