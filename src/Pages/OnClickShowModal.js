import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const OnClickShowModal = ({show,handleClose}) => {
    const [users,setUsers]=useState([]);
    const [textData,setTextData]=useState({username:""});
  
    const handleOnChange=(event)=>{
       setTextData({...textData,[event.target.name]:event.target.value});
    }
    console.log("Name=>",textData)

    const handleOnSave=()=>{
       setUsers([...users,textData])
       setTextData("")
    }

  return (
    <>
      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Set Name</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Control
           type="text"
           placeholder="Enter Name"
           name="name"
           value={textData.username}
           onChange={handleOnChange}
         />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleOnSave}>Save</Button>
        </Modal.Footer>

      </Modal>
    </>
  );
};
export default OnClickShowModal;
