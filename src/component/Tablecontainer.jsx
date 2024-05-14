import React, { useState } from "react";
import { TablePagination } from "@mui/material";
import "./Tablecontainer.css";
const Tablecontainer = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const filteredData = data.filter(
    (row) =>
      row.userName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
  );

  return (
    <div className="table-container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search by User Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">User Name</th>
            <th className="table-header">Email</th>
            <th className="table-header">Department</th>
            <th className="table-header">Status</th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? filteredData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : filteredData
          ).map((row, index) => (
            <tr key={index}>
              <td className="table-cell">{row.userName}</td>
              <td className="table-cell">{row.email}</td>
              <td className="table-cell">{row.department}</td>
              <td className="table-cell">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination
        rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};
export default Tablecontainer;
