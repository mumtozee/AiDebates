import { useState } from "react";
import Argument from "../../Components/Argument/Argument";

import { Modal } from "react-bootstrap";

const Discussion = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="row">
        <figure className="text-center">
          <blockquote className="blockquote">
            <p className="display-6">Is cyber-bullying a real problem ?</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            proposed by <em className="text-primary">@user123</em> on 12.09.2017
          </figcaption>
          <button className="btn btn-primary" display="none" onClick={handleShow}>Express Yourself!</button>
        </figure>
        
        <div className="col">
          <div className="d-flex justify-content-center align-items-center">
            <img src={`${process.env.PUBLIC_URL}/assets/plus.jpg`} width={28} />
          </div>
        </div>
        
        <div className="col">
          <div className="d-flex justify-content-center align-items-center">
            <img src={`${process.env.PUBLIC_URL}/assets/minus.jpg`} width={28} />
          </div>
        </div>
      </div>

      <div className="row mt-2 mb-5">
        <div className="col border-end">
          <Argument />
          <Argument />
          <Argument />
          <Argument />
        </div>

        <div className="col">
          <Argument />
          <Argument />
          <Argument />
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <form action="/" onSubmit={handleSubmit}>
          <Modal.Body>
            <p>Provide your arguments and facts in the area below and the neural
              network will define wether you are for or against the thesis:</p>
            <textarea className="form-control" name="argument" rows={5}></textarea>
          </Modal.Body>

          <Modal.Footer>
            <input type="submit" value="Submit" className="btn btn-primary" onClick={handleClose} />
            <button type="button" className="btn btn-danger" onClick={handleClose}>Cancel</button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default Discussion;
