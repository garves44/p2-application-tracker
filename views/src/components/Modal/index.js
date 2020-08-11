import React, { useState } from "react";
import Moment from "react-moment";
import Modal from "react-modal";
import Form from "react-bootstrap/Form";

const ModalEl = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button
        id="create-job"
        className="btn btn-block btn-add"
        onClick={() => setModalIsOpen(true)}
      >
        <span className="oi oi-plus mr-2"></span>Add Job
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "#011f4b",
          },
        }}
      >
        <Form>
          <Form.Group>
            <Form.Label htmlFor="add-job">Add a New Job!</Form.Label>
            <Form.Control
              id="add-job"
              name="job-modal"
              type="text"
              value="test"
            ></Form.Control>
          </Form.Group>
        </Form>
        <button onClick={() => setModalIsOpen(false)}>Add</button>
        <button onClick={() => setModalIsOpen(false)}>Cancel</button>
      </Modal>
    </div>
  );
};

export default ModalEl;
