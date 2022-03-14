import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const PopupTextSave=({show,handleClose,handleOnAdd,textData})=>{


    return(
        <>
         <Modal show={show} onHide={handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Username</Modal.Title>
          </Modal.Header>

          <Modal.Body>{textData.username}</Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleOnAdd}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
        </>
    )
}
export default PopupTextSave;
