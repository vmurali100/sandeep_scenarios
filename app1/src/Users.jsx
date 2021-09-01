import React, { useState } from "react";

export const Users = () => {
  const [showModal, setshowModal] = useState(false);
  const adduser = () => {
    setshowModal(true);
  };
  const closeModal = () => {
    setshowModal(false);
  };
  return (
    <div>
      <div className="container">
          
        <button type="button" className="btn btn-primary" onClick={adduser}>
          Add User
        </button>
      </div>
      {showModal && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog" style={{maxWidth:"60%"}}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">

                <form>
                <div className="row">
              <div className="col">
              <div className="mb-3" style={{ textAlign: "left" }}>
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3" style={{ textAlign: "left" }}>
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                    </div>
                  
              </div>
              <div className="col">
              <div className="mb-3" style={{ textAlign: "left" }}>
                    <label htmlFor="">Select State</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="mb-2">
                      Selct Skills
                    </label>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Javascript
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        React JS
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Node JS
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Angular
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="mb-2">Gender</label>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Male
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Female
                      </label>
                    </div>
                  </div>
               
              </div>
          </div>
                   </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
