import React, { useState } from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import { ListGroup, ListGroupItem } from "react-bootstrap";
import PopupTextSave from "./PopupTextSave";

const TextBox = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [users, setUsers] = useState([]);
  const [textData, setTextData] = useState({ username: "" });

  const handleOnChange = (event) => {
    setTextData({ ...textData, [event.target.name]: event.target.value });
  };

  console.log(textData)

  const handleOnAdd = () => {
    setUsers([...users, textData]);
    setTextData("");
  };

  return (
    <>
      <div style={{ margin: "50px" }}>
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          name="username"
          value={textData.username}
          onChange={handleOnChange}
        />
        <Button onClick={handleShow}>Click here</Button>
      </div>

      <PopupTextSave
        show={show}
        handleClose={handleClose}
        handleOnAdd={handleOnAdd}
        textData={textData}
      />
    </>
  );
};
export default TextBox;
