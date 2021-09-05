import React, { useState } from "react";
import { returnCheckBoxValues, returnGenderValues, returnUser } from "./utils";

export const Users = () => {
  const [showModal, setshowModal] = useState(false);
  const [user, setUser] = useState(returnUser());
  const [checkBoxes, setcheckBoxes] = useState(returnCheckBoxValues());

  const [gendervalues, setgendervalues] = useState(returnGenderValues());
  const [isInvalid, setisInvalid] = useState(true)
  let { email, password, state, date, gender, subjects } = user;
  const adduser = () => {
    setshowModal(true);
  };
  const closeModal = () => {
    setshowModal(false);
  };
  const validate = () =>{
    let valid = true
    let newUser = {...user}

    for(let a in newUser){
      if(a !== "subjects"){
        if(newUser[a]===""){
          valid=false
        }
      }else if(a === "subjects"){
        if(newUser[a].length === 0){
          valid=false
        }
      }
    }
    if(valid){
      setisInvalid(false)
    }else{
      setisInvalid(true)
    }

  }
  const hanldeChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    validate()
    setUser(newUser);
  };
  const handleCheckChange = (e) => {
    var allCheckBoxes = [...checkBoxes];
    allCheckBoxes.forEach((cbox) => {
      if (cbox.name === e.target.value) {
        if (!cbox.isChecked) {
          cbox.isChecked = true;
        } else {
          cbox.isChecked = false;
        }
      }
    });
    setcheckBoxes(allCheckBoxes);
    let newUser = { ...user };

    checkBoxes.forEach((e) => {
      if (e.isChecked) {
        newUser.subjects.push(e.name);
      }
    });
    setUser(newUser);

    validate()
  };

  const handleSubmit = () => {
    let newUser = { ...user };
    checkBoxes.forEach((e) => {
      if (e.isChecked) {
        newUser.subjects.push(e.name);
      }
    });
    gendervalues.forEach((gender) => {
      if (gender.isChecked) {
        newUser.gender = gender.name;
      }
    });

    setUser(newUser);
    console.log(user);
    // Will Clear the form  .. to be triggered after the action
    setUser(returnUser());

    // Will Clear the Gender values
    setgendervalues(returnGenderValues());

    //Will Clear Checkbox Values
    setcheckBoxes(returnCheckBoxValues());
  };
  const hanldeGenderChange = (e) => {
    let newGendervalues = [...gendervalues];

    gendervalues.forEach((gender) => {
      gender.isChecked = false;
      if (gender.name === e.target.value) {
        gender.isChecked = true;
      }
    });
    setgendervalues(newGendervalues);
    validate()
    let newUser = { ...user };
    gendervalues.forEach((gender) => {
      if (gender.isChecked) {
        newUser.gender = gender.name;
      }
    });
    setUser(newUser);

    console.log(newGendervalues);

    // setgendervalues(gendervalues.map((gender)=>gender.isChecked?gender.isChecked = false:gender.isChecked = true))
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
          <div className="modal-dialog" style={{ maxWidth: "60%" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter User Details</h5>
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
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          name="email"
                          onChange={(e) => {
                            hanldeChange(e);
                          }}
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
                          value={password}
                          name="password"
                          onChange={(e) => {
                            hanldeChange(e);
                          }}
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
                          value={date}
                          name="date"
                          onChange={(e) => {
                            hanldeChange(e);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3" style={{ textAlign: "left" }}>
                        <label htmlFor="">Select State</label>
                        <select
                          className="form-select"
                          value={state}
                          name="state"
                          onChange={(e) => {
                            hanldeChange(e);
                          }}
                        >
                          <option selected>Open this select menu</option>
                          <option value="Andhra">Andhra</option>
                          <option value="Tamilnadu">Tamilnadu</option>
                          <option value="Telangana">Telangana</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="" className="mb-2">
                          Selct Skills
                        </label>
                        {checkBoxes.map((cb) => (
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value={cb.name}
                              checked={cb.isChecked}
                              onChange={(e) => {
                                handleCheckChange(e);
                              }}
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              {cb.name}
                            </label>
                          </div>
                        ))}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="" className="mb-2">
                          Gender
                        </label>
                        {gendervalues.map((gender) => (
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gender"
                              value={gender.name}
                              checked={gender.isChecked}
                              onChange={(e) => {
                                hanldeGenderChange(e);
                              }}
                            />
                            <label
                              class="form-check-label"
                              for="flexRadioDefault1"
                            >
                              {gender.name}
                            </label>
                          </div>
                        ))}
                        {/* <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gender"
                            value="Male"
                            onChange={(e)=>{hanldeChange(e)}}
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Male
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gender"
                            value="Female"
                            onChange={(e)=>{hanldeChange(e)}}
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Female
                          </label>
                        </div>
                      </div> */}
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
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={isInvalid}
                >
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
