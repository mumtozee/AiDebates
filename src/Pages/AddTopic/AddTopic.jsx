import { Modal } from "react-bootstrap";
import { useState } from "react";

import TopicDataService from "../../Services/TopicDataService.js";

import styles from "./AddTopic.module.css";

const AddTopic = (props) => {
  const isLoggedIn = props.isLoggedIn;

  const [show, setShow] = useState(false);
  const [thesis, setThesis] = useState("");

  if (!isLoggedIn) {
    return (
      <>
        <div className="row">
          <div className="d-flex justify-content-center align-items-center" id={styles.oops_text}>
            <div className="col-sm-7">
              <p className="display-5 text-center">Oops, only authorized users can propose topics.</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  const handleClose = () => setShow(false);

  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
  };

  const handleChange = (event) => {
    setThesis(event.target.value)
  };

  const handleSend = () => {
    let date = new Date();
    let dateString = date.getUTCFullYear() + "-"
      + ("0" + (date.getUTCMonth() + 1)).slice(-2) + "-"
      + ("0" + date.getUTCDate()).slice(-2);

    let topic = {
      authorId: 1,
      text: thesis,
      publishedDate: dateString
    };

    console.log(topic);

    TopicDataService.createTopic(topic);
    setShow(false);
  };

  return (
    <>
      <div className="row">
        <div className="d-flex justify-content-center align-items-center">
          <p className="display-6">Propose your topic: </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p className="small">Please, mind the appropriate language :)</p>
        </div>
        <form action="/" onSubmit={handleShow} className="d-flex flex-row align-items-center justify-content-center">
          <div className="col-sm-7">
            <textarea className="form-control" rows={3} onChange={handleChange}
              placeholder="Your thesis goes here" name="thesis"></textarea>
            <div className="d-flex justify-content-center align-items-center mt-2">
              <button type="submit" databstoggle="modal" databstarget="#confirmProposal"
                className="btn btn-success" onClick={handleShow}>Propose</button>
            </div>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Thesis</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Are you sure you want to propose the thesis<br />&ldquo;{thesis}&rdquo; ?</p>
            </Modal.Body>

            <Modal.Footer>
              <input type="button" value="Submit" className="btn btn-primary" onClick={handleSend} />
              <button type="button" className="btn btn-danger" onClick={handleClose}>Cancel</button>
            </Modal.Footer>
          </Modal>
        </form>
      </div>
    </>
  );
};

export default AddTopic;
