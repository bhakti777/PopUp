import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import DisplayRegiFormDetails from "../Components/DisplayRegiFormDetails";

const RegiFormPopup = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    city: "",
    gender: "",
    zip: "",
  };

  const [formState, setFormState] = useState(initialState);

  const [users, setUsers] = useState([]); //to add new Row

  const handleOnChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
    console.log("formState=>", formState);
  };

  const handleOnSelect = (eventKey,event) => {
    setFormState({...formState,"gender":event.target.name})
    console.log("gender=>", eventKey,event.target.name);
  };

  const handleOnSubmit = () => {
    setUsers([...users, formState]);
    setFormState(initialState);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Registration Form</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link" onClick={handleShow}>
                Registration Form
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Registration Form</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter firstname"
                  value={formState.firstname}
                  name="firstname"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  type="lastname"
                  placeholder="Enter lastname"
                  value={formState.lastname}
                  name="lastname"
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={formState.email}
                  name="email"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={formState.password}
                  name="password"
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                value={formState.address}
                name="address"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City:</Form.Label>
                <Form.Control
                  value={formState.city}
                  name="city"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Row>
                  <Col xs={2}> Gender</Col>
                  <Col>
                    <Dropdown onSelect={handleOnSelect}>
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        align="center"
                      >
                        Dropdown Button
                      </Dropdown.Toggle>
                      <Dropdown.Menu value={formState.gender} name="gender">
                        <Dropdown.Item href="#/action-1" name="female">Female</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" name="male">Male</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" name="other">Other</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  value={formState.zip}
                  name="zip"
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleOnSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>

      <div style={{ maxWidth: "700px", margin: "0 auto", marginTop: "80px" }}>
        <DisplayRegiFormDetails RegFormDetails={users} />
      </div>
    </>
  );
};

export default RegiFormPopup;
