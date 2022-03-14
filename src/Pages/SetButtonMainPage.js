import React,{ useState }  from "react";
import Button from "react-bootstrap/Button";
import OnClickShowModal from "./OnClickShowModal";
import DisplayNameOnSave from "../Components/DisplayNameOnSave";

const SetButtonMainPage=({TextData})=>{

    const [show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);

    

    return (
        <>
        <div style={{margin:"50px"}}>
            <Button onClick={handleShow}>Click here...</Button>
        </div>

        <div>
            {<OnClickShowModal
             show={show}
              handleClose={handleClose}
            />}
        </div>

        <div>
            <DisplayNameOnSave textData={textData}/>
        </div>
        </>
    );
}
export default SetButtonMainPage;