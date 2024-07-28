import React from "react";
import { Card, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./MyTask.css";
import "@fontsource/poppins";

function MyTask() {
  const Tasks = [
    {
      Title: "Title1",
      Case: "Case1",
      Assignee: "Assignee1",
      Priority: "Low",
      Duedate: "01-01-2024",
      Status: "Complete",
    },
    {
      Title: "Title2",
      Case: "Case2",
      Assignee: "Assignee2",
      Priority: "Medium",
      Duedate: "02-01-2024",
      Status: "Complete",
    },
    {
      Title: "Title3",
      Case: "Case3",
      Assignee: "Assignee3",
      Priority: "High",
      Duedate: "03-01-2024",
      Status: "Complete",
    },
    {
      Title: "Title4",
      Case: "Case4",
      Assignee: "Assignee4",
      Priority: "Low",
      Duedate: "10-01-2024",
      Status: "Complete",
    },
    {
      Title: "Title5",
      Case: "Case5",
      Assignee: "Assignee5",
      Priority: "High",
      Duedate: "13-01-2024",
      Status: "Complete",
    },
    {
      Title: "Title6",
      Case: "Case6",
      Assignee: "Assignee6",
      Priority: "High",
      Duedate: "17-01-2024",
      Status: "Complete",
    },
    {
      Title: "Title7",
      Case: "Case7",
      Assignee: "Assignee7",
      Priority: "Medium",
      Duedate: "23-01-2024",
      Status: "Complete",
    },
    {
      Title: "Title8",
      Case: "Case8",
      Assignee: "Assignee8",
      Priority: "Low",
      Duedate: "03-02-2024",
      Status: "Complete",
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
