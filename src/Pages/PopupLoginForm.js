import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";


const PopupLoginForm = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const initialState={
    email:"",
    password:""
  };

  const [formState,setFormState]=useState(initialState);

  const [users,setUsers]=useState([])  //to add new row
  
  const handleOnChange=(event)=>{
   setFormState({...formState,[event.target.name]:event.target.value})
   console.log(formState)
  }
  
  const handleOnAdd=()=>{
    setUsers([...users,formState])
    setFormState(initialState)
  } 



  return (
    <>
      <div style={{ margin: "50px" }}>
        <Button onClick={handleShow}>Launch Modal</Button>
      </div>

      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group as={Row} className="mb-3" id="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control 
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={formState.email}
                            onChange={handleOnChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" id="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control 
                             type="password"
                             placeholder="Enter Password"
                             name="password"
                             value={formState.password}
                             onChange={handleOnChange}
                             />
                        </Col>
                    </Form.Group>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleOnAdd}>Save Changes</Button>
        </Modal.Footer>
      </Modal>


      <div style={{maxWidth: '600px',margin:"0 auto"}}>
      <Table striped bordered hover variant="dark">
          <thead>
            <tr>
           <th>#</th>
           <th>Email</th>
           <th>Password</th>
           </tr>
          </thead>

          <tbody>
            {users && users.map((user,index)=>{
              return(
            <tr>
              <td>{index+1}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
            )})}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default PopupLoginForm;
