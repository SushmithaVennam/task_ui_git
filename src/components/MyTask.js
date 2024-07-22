import React from "react";
import { Card, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./MyTask.css";
import "@fontsource/poppins";
import "font-awesome/css/font-awesome.min.css";

function MyTask() {
  const Tasks = [
    {
      Title: "Title1",
      Case: "Case1",
      Assignee: "Assignee1",
      Priority: "Low",
      Duedate: "01-01-2024",
    },
    {
      Title: "Title2",
      Case: "Case2",
      Assignee: "Assignee2",
      Priority: "Medium",
      Duedate: "02-01-2024",
    },
    {
      Title: "Title3",
      Case: "Case3",
      Assignee: "Assignee3",
      Priority: "High",
      Duedate: "03-01-2024",
    },
  ];

  return (
    <Container fluid="md" className="mt-5 AddTaskContainer font-poppins">
      <h3>My Task</h3>
      <Card>
        <Card.Body>
          {/* <Card.Title>My Task</Card.Title> */}
          <Table hover>
            <thead>
              <tr className="task-header">
                <th>TITLE</th>
                <th>CASE</th>
                <th>ASSIGNEE</th>
                <th>PRIORITY</th>
                <th>DUE DATE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {Tasks.map((task) => (
                <tr className="task-contents">
                  <td>{task.Title}</td>
                  <td>{task.Case}</td>
                  <td>{task.Assignee}</td>
                  <td>{task.Priority}</td>
                  <td>{task.Duedate}</td>
                  <td>{task.Status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MyTask;
