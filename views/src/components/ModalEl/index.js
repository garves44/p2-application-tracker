import React, { useState } from "react";
import Moment from "react-moment";
import Modal from "react-modal";
import Form from "react-bootstrap/Form";
import API from "../../utils/API";
import Utils from "../../utils";
import { useUserData } from "../../contexts/AuthContext";

const ModalEl = () => {
  const [userData, setUserData] = useUserData();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [jobData, setJobData] = useState({
    job_name: "",
    email: userData.email,
    last_used_token: userData.token,
  });

  const addJob = async (jobObj) => {
    let response = await API.addJob(jobObj);

    let { status, statusText, responseText, data } = response;

    console.log("status", status);
    console.log("statusText", statusText);
    console.log("responseText", responseText);
    console.log("data", data);

    if (data.applied === false) {
      return true;
    }
    return false;
  };

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
        <Form id="jobForm">
          <Form.Group>
            <Form.Label htmlFor="add-job">Add a New Job!</Form.Label>
            <Form.Control
              id="add-job"
              name="job_name"
              type="text"
              value={jobData.job_name}
              onChange={(event) => {
                const { name, value } = event.target;
                setJobData((prevState) => ({
                  ...prevState,
                  [name]: value,
                }));
              }}
            ></Form.Control>
          </Form.Group>
        </Form>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (jobData.job_name !== "") {
              if (addJob(jobData)) {
                setJobData((prevState) => ({
                  ...prevState,
                  job_name: "",
                }));
                setModalIsOpen(false);
              } else {
                Utils.AlertMessage("Failed to add Job", "danger");
              }
            }
          }}
        >
          Add
        </button>
        <button onClick={() => setModalIsOpen(false)}>Cancel</button>
      </Modal>
    </div>
  );
};

export default ModalEl;
