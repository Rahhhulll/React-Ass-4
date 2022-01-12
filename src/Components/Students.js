import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";

const Students = () => {
  const rows = [
    {
      name: "Rahul",
      age: 22,
      course: "MERN",
      batch: "September",
      change: <NavLink to="#">Edit</NavLink>,
    },
    {
      name: "Rajiv",
      age: 25,
      course: "MERN",
      batch: "July",
      change: <NavLink to="#">Edit</NavLink>,
    },
    {
      name: "Rohan",
      age: 35,
      course: "MERN",
      batch: "November",
      change: <NavLink to="#">Edit</NavLink>,
    },
    {
      name: "Vaibhav",
      age: 35,
      course: "MERN",
      batch: "September",
      change: <NavLink to="#">Edit</NavLink>,
    },
    {
      name: "Karan",
      age: 35,
      course: "MERN",
      batch: "July",
      change: <NavLink to="#">Edit</NavLink>,
    },
    {
      name: "Vishal",
      age: 35,
      course: "MERN",
      batch: "August",
      change: <NavLink to="#">Edit</NavLink>,
    },
    {
      name: "Vijay",
      age: 35,
      course: "MERN",
      batch: "December",
      change: <NavLink to="#">Edit</NavLink>,
    },
  ];
  return (
    <div id="studentDetails">
      <div className="flex1">
        <h1>Students Details</h1>
        <button className="addbtn">
          <NavLink
            to="/students-desc"
            style={{ textDecoration: "none", color: "black" }}
          >
            Add new student
          </NavLink>
        </button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Course</TableCell>
              <TableCell align="right">Batch</TableCell>
              <TableCell align="right">Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.course}</TableCell>
                <TableCell align="right">{row.batch}</TableCell>
                <TableCell align="right">{row.change}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Students;
