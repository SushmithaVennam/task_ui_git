import React, { useState } from "react";
import { Card, Container, Table } from "react-bootstrap";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import tasksData from "../resources/tasksdata.json";

function MyTable() {
  const [tableData, setTableData] = useState(tasksData);
  const columns = [
    { label: "Serial", accessor: "SL" },
    { label: "Title", accessor: "Title" },
    { label: "Case", accessor: "Case" },
    { label: "Assignee", accessor: "Assignee" },
    { label: "Priority", accessor: "Priority" },
    { label: "Duedate", accessor: "Duedate" },
    { label: "Status", accessor: "Status" },
  ];
  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        console.log(a);
        console.log(b);
        if (!(sortField in a) || a[sortField] === null) return 1;
        if (!(sortField in b) || b[sortField] === null) return -1;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return (
    <Container fluid="md" className="mt-5 AddTaskContainer font-poppins">
      <h3>My Task</h3>
      <Card>
        <Card.Body>
          <Table hover>
            {/* <Card.Title>My Task</Card.Title> */}
            <TableHead columns={columns} handleSorting={handleSorting} />
            <TableBody columns={columns} tableData={tableData} />
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default MyTable;
