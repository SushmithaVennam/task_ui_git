import React, { useState } from "react";
import "./addTask.css";
import { Button, Card, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "@fontsource/poppins";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function AddTask() {
  const assignees = [
    { key: 1, label: "SUPER ADMIN" },
    { key: 2, label: "MR.ALI" },
    { key: 3, label: "TANIA" },
    { key: 4, label: "BASA" },
    { key: 5, label: "JAWERIA" },
    { key: 6, label: "ADEEL" },
    { key: 7, label: "FEMI" },
    { key: 8, label: "DANISH SIDDIQ CHOWDARY" },
  ];

  const cases = [
    { key: 1, label: "ANIA v/s SHAUGHIN" },
    { key: 2, label: "KATTAPPA v/s BAHU" },
    { key: 3, label: "IFRAGH" },
    { key: 4, label: "ABC1123" },
  ];

  const [title, setTitle] = useState("");
  const [myCase, setmyCase] = useState("0");
  const [assignee, setAssignee] = useState("0");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState("28-07-2024");
  const [description, setDescription] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    var formValid = true;
    setFormSubmitted(true);
    if (title.length === 0) {
      formValid = false;
    }

    if (myCase === "0") {
      formValid = false;
    }

    if (assignee === "0") {
      formValid = false;
    }

    if (formValid === false) {
      console.log(
        "Form is validated Failed. Please fix errors before submitting again."
      );
    } else {
      const taskJson = {
        assignee: assignee,
        case: myCase,
        description: description,
        dueDate: dueDate,
        priority: priority,
        title: title,
      };
      console.log(taskJson);
    }
  };
  return (
    <Container fluid="md" className="mt-3 AddTaskContainer font-poppins">
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
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            {formSubmitted && title.length === 0 && (
              <p className="empty-field pt-2">This value is required</p>
            )}
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
              aria-label="Floating label select example"
              defaultValue="0"
              onChange={(e) => {
                setmyCase(e.target.value);
              }}
            >
              <option value="0">Select Case</option>
              {cases.map((option) => (
                <option value={option.key} key={option.key}>
                  {option.label}
                </option>
              ))}
            </Form.Control>
            {formSubmitted && myCase === "0" && (
              <p className="empty-field pt-2">This value is required</p>
            )}
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasic" as={Col}>
            <Form.Label as="small">
              ASSIGNEE<span className="star">*</span>
            </Form.Label>
            <Form.Control
              as="select"
              className="form-select rounded-form-control"
              aria-label="Floating label select example"
              defaultValue="0"
              onChange={(e) => {
                setAssignee(e.target.value);
              }}
            >
              <option value="0">Select User</option>
              {assignees.map((option) => (
                <option value={option.key} key={option.key}>
                  {option.label}
                </option>
              ))}
            </Form.Control>
            {formSubmitted && assignee === "0" && (
              <p className="empty-field pt-2">This value is required</p>
            )}
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-2" controlId="formBasic" as={Col}>
            <Form.Label as="small">PRIORITY</Form.Label>
            <Form.Control
              as="select"
              className="form-select rounded-form-control"
              aria-label="Floating label select example"
              defaultValue="0"
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            >
              <option value="0">LOW</option>
              <option value="1">MEDIUM</option>
              <option value="2">HIGH</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasic" as={Col}>
            <Form.Label as="small">DUE DATE</Form.Label>
            <Form.Control
              type="date"
              name="dueDate"
              className="rounded-form-control"
              onChange={(e) => {
                setDueDate(e.target.value);
              }}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-2 " controlId="formBasic">
          <Form.Label as="small" className="mt-5">
            DESCRIPTION
          </Form.Label>
          <div id="editorcontainer">
            <ReactQuill
              onChange={(value) => {
                setDescription(value);
              }}
              scrollingContainer="#editorcontainer"
            />
          </div>
        </Form.Group>

        <div className="text-center">
          <Button className="primary white-text" onClick={validateForm}>
            CREATE
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default AddTask;
