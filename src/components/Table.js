import React, { useState, useRef } from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import copy from "copy-to-clipboard";
import { CSVLink } from "react-csv";
import { downloadExcel } from "react-export-table-to-excel";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useReactToPrint } from "react-to-print";
import "./Table.css";
import tasksData from "../resources/tasksdata.json";
import { FaSearch } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaRegFileExcel } from "react-icons/fa6";
import { BsFiletypeCsv } from "react-icons/bs";
import { FaPrint } from "react-icons/fa";
// import { FaColumns } from "react-icons/fa";

function MyTable() {
  const [tableData, setTableData] = useState(tasksData);
  const header = [
    "Serial",
    "Title",
    "Case",
    "Assignee",
    "Priority",
    "Duedate",
    "Status",
  ];
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

  const copyToClipboard = () => {
    var copyText = "";
    var a_row = "";
    columns.map((cur_column) => {
      if (a_row.length === 0) {
        a_row += cur_column.label;
      } else {
        a_row += "\t" + cur_column.label;
      }
    });
    copyText += a_row;
    tableData.map((data) => {
      a_row = data.SL;
      a_row += "\t" + data.Title;
      a_row += "\t" + data.Case;
      a_row += "\t" + data.Assignee;
      a_row += "\t" + data.Priority;
      a_row += "\t" + data.Duedate;
      a_row += "\t" + data.Status;
      copyText += "\n" + a_row;
    });

    copy(copyText);
    alert(`You have copied "${copyText}"`);
  };

  function saveExcel() {
    downloadExcel({
      fileName: "Tasks.xls",
      sheet: "Tasks",
      tablePayload: {
        header,
        // accept two different data structures
        body: tableData,
      },
    });
  }

  const savePDF = () => {
    const doc = new jsPDF();
    autoTable(doc, { html: "#TasksTable" });
    doc.save("Tasks.pdf");
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Container fluid="md" className="mt-5 AddTaskContainer font-poppins">
      <Row className="top-row">
        <Col>
          <h3>My Task</h3>
        </Col>
        <Col>
          <Form.Group
            controlId="formBasicName"
            style={{ borderBottom: "solid 1px black" }}
          >
            <Form.Label as="small">
              <FaSearch />
            </Form.Label>
            <Form.Control
              type="search"
              placeholder="QUICK SEARCH"
              name="name"
              className="width-fit"
              style={{
                display: "inline-block",
                background: "transparent",
                border: "none",
                textAlign: "center",
                fontSize: "14px",
              }}
            />
          </Form.Group>
        </Col>
        <Col
          style={{
            justifyContent: "flex-end",
            width: "fit-content",
          }}
        >
          <div class="dt-buttons ">
            <Button
              className=".btn-no-radius"
              variant="outline-light"
              title="Copy"
              onClick={copyToClipboard}
            >
              <FaRegCopy />
            </Button>
            <Button
              className=".btn-no-radius"
              variant="outline-light"
              title="Excel"
              onClick={saveExcel}
            >
              <FaRegFileExcel />
            </Button>
            <CSVLink data={tableData} filename={"Tasks.csv"}>
              <Button
                className=".btn-no-radius"
                variant="outline-light"
                title="csv"
              >
                <BsFiletypeCsv />
              </Button>
            </CSVLink>
            <Button
              className=".btn-no-radius"
              variant="outline-light"
              title="pdf"
              onClick={savePDF}
            >
              <FaRegFilePdf />
            </Button>
            <Button
              className=".btn-no-radius"
              variant="outline-light"
              title="Print"
              onClick={handlePrint}
            >
              <FaPrint />
            </Button>
            {/* <Button
              className=".btn-no-radius"
              variant="outline-light"
              title="Columns"
            >
              <FaColumns />
            </Button> */}
          </div>
        </Col>
      </Row>
      <Card>
        <Card.Body>
          <Table hover id="TasksTable" ref={componentRef}>
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
