import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function AddTask() {
  return (
    // <div className={`d-flex justify-content-center align-items-center`}>
    <Container fluid="md" className="mt-5">
      <Row>
        <Form.Group className="mb-2" controlId="formBasicName">
          <Form.Label as="small">TITLE *</Form.Label>
          <Form.Control type="text" placeholder="TITLE" name="name" />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-2" controlId="formBasic" as={Col}>
          <Form.Label as="small">CASE *</Form.Label>
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            rounded
          >
            <option selected>Select Case</option>
            <option value="1">JERRINE v/s SISSISE</option>
            <option value="2">ANIA v/s SHAUGHIN</option>
            <option value="3">HIT</option>
            <option value="3">IFRAGH</option>
            <option value="4">ABC1123</option>
          </select>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasic" as={Col}>
          <Form.Label as="small">ASSIGNE</Form.Label>
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Select User</option>
            <option value="1">SUPER ADMIN</option>
            <option value="2">MR.ALI</option>
            <option value="3">TANIA</option>
            <option value="4">BASA</option>
            <option value="5">JAWERIA</option>
            <option value="6">ADEEL</option>
            <option value="7">FEMI</option>
            <option value="8">DANISH SIDDIQ CHOWDARY</option>
          </select>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-2" controlId="formBasic" as={Col}>
          <Form.Label as="small">PRIORITY</Form.Label>
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Low</option>
            <option value="1">MEDIUM</option>
            <option value="2">HIGH</option>
          </select>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasic" as={Col}>
          <Form.Label as="small">DUE DATE</Form.Label>
          <Form.Control type="date" placeholder="2024-07-24 7:50" name="date" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-2" controlId="formBasic">
        <Form.Label as="small">DESCRIPTION</Form.Label>
        <Form.Control type="text" name="description" as="textarea" />
      </Form.Group>
    </Container>
  );
}

export default AddTask;
