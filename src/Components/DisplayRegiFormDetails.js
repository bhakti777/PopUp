import React from "react";
import Table from "react-bootstrap/Table";

const DisplayRegiFormDetails = ({ RegFormDetails }) => {
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
            <th>city</th>
            <th>Gender</th>
            <th>Zip</th>
          </tr>
        </thead>
        <tbody>
          {RegFormDetails &&
            RegFormDetails.map((user, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.address}</td>
                  <td>{user.city}</td>
                  <td>{user.gender}</td>
                  <td>{user.zip}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default DisplayRegiFormDetails;
