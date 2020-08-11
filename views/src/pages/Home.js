import React from "react";
import Moment from "react-moment";
import ModalEl from "../components/Modal";

const Home = () => {
  return (
    <div>
      <ModalEl />

      <main className="col-12 col-lg-9 d-flex flex-column">
        <div className="m-5 row justify-content-around">
          <div className="col-12 col-md-6 col-xl-3 mb-3">
            <div className="card">
              <h4 className="card-header bg-dark text-light">Need to Apply</h4>
              <ul id="list-apply" className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="badge badge-primary badge-pill">
                    {" "}
                    05/28/2020
                  </span>
                  <p className="m-1">Sample Job to do!</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-3 mb-3">
            <div className="card">
              <h4 className="card-header bg-dark text-light">
                Waiting for Response
              </h4>
              <ul id="list-inProgress" className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="badge badge-primary badge-pill">
                    {" "}
                    05/28/2020
                  </span>
                  <p className="m-1">Sample in progress</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-3 mb-3">
            <div className="card">
              <h4 className="card-header bg-dark text-light">
                Interview Scheduled
              </h4>
              <ul id="list-inReview" className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="badge badge-primary badge-pill">
                    {" "}
                    05/28/2020
                  </span>
                  <p className="m-1">Sample task in Review</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-3 mb-3">
            <div className="card">
              <h4 className="card-header bg-dark text-light">Need Follow Up</h4>
              <ul id="list-done" className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="badge badge-primary badge-pill">
                    {" "}
                    05/28/2020
                  </span>
                  <p className="m-1">Sample task done</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
