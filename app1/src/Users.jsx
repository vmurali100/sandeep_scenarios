import React, { useEffect, useState } from "react";
import { returnCheckBoxValues, returnGenderValues, returnUser } from "./utils";
import { useSelector, useDispatch } from "react-redux";
import { addUserAction, showModalAction } from "./actions";

export const Users = () => {
  const [user, setUser] = useState(returnUser());
  const [checkBoxes, setcheckBoxes] = useState(returnCheckBoxValues());
  const [gendervalues, setgendervalues] = useState(returnGenderValues());
  const [isInvalid, setisInvalid] = useState(true)

  const dispatch = useDispatch();
  const {showModal,selectedUser} = useSelector((state) => state.data);
  console.log(showModal)
  console.log(selectedUser)
  
  let { email, password, state, date, gender, subjects } = user;

  useEffect(()=>{
    if(selectedUser!=={}){
      setUser(selectedUser)
    }
    validate()
  },[user,checkBoxes,gendervalues])

  useEffect(()=>{
    if(Object.values(selectedUser).length > 0){
      setUser(selectedUser)
      let newCheckBoxes = [...checkBoxes]
      if(selectedUser){
        selectedUser.subjects.forEach((subj)=>{// ["HTML","CSS"]
          newCheckBoxes.forEach((subject)=>{ //
            if(subject.name === subj){
              subject.isChecked = true
            }
          })
        })
      }

      setcheckBoxes(newCheckBoxes)

      let newGenderValues = [...gendervalues]
      newGenderValues.forEach((gender)=>{
        if(gender.name === selectedUser.gender){
          gender.isChecked=true
        }
      })
      setgendervalues(newGenderValues)
    }
  },[selectedUser])

  const adduser = () => {
    dispatch(showModalAction(true))
  };
  const closeModal = () => {

    dispatch(showModalAction(false))
    resetValues()
  };
  const validate = () =>{
    let valid = true
    let newUser = {...user}

    for(let a in newUser){
      if(a !== "subjects" && a !== "gender"){
        if(newUser[a]===""){
          valid=false
        }
      
      }else if(a === "gender"){
        if(gendervalues.every((gender)=>gender.isChecked === false)){
          valid=false
        }
      }else if(a === "subjects"){
        if(checkBoxes.every(subject=>subject.isChecked ===false)){
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
    
    setUser(newUser);
  };
  const handleCheckChange = (e) => {
    // TO Update the Checkbox Status
    var allCheckBoxes = [...checkBoxes];
    allCheckBoxes.forEach((cbox) => {
      if (cbox.name === e.target.value) {
        if (cbox.isChecked) {
          cbox.isChecked = false;
        } else {
          cbox.isChecked = true;
        }
      }
    });
    setcheckBoxes(allCheckBoxes);
      // let newUser = { ...user };

      // checkBoxes.forEach((e) => {
      //   if (e.isChecked) {
      //     if(newUser.subjects.indexOf(e.name) === -1){
      //       newUser.subjects.push(e.name);
      //     }
      //     // newUser.subjects.push(e.name);
      //   }else{
      //     newUser.subjects = newUser.subjects.filter(subject=>subject !== e.name)
      //   }
      // });
    // setUser(newUser);

  };

  const handleSubmit = () => {
    let newUser = { ...user };
    checkBoxes.forEach((e) => {
      if (e.isChecked) {
        newUser.subjects.push(e.name);
      }
    });
    gendervalues.forEach((gen) => {
      if (gen.isChecked) {
        newUser.gender = gen.name;
      }
    });
    dispatch(addUserAction(user))
 
    // setUser(newUser);
    console.log(newUser);
    // Will Clear the form  .. to be triggered after the action
    
  };

  const resetValues =()=>{
    setUser(returnUser());

    // Will Clear the Gender values
    setgendervalues(returnGenderValues());

    //Will Clear Checkbox Values
    setcheckBoxes(returnCheckBoxValues());
  }
  const hanldeGenderChange = (e) => {
    let newGendervalues = [...gendervalues];

    gendervalues.forEach((gender) => {
      gender.isChecked = false;
      if (gender.name === e.target.value) {
        gender.isChecked = true;
      }
    });
    setgendervalues(newGendervalues);
    
    // let newUser = { ...user };
    // gendervalues.forEach((gender) => {
    //   if (gender.isChecked) {
    //     newUser.gender = gender.name;
    //   }
    // });
    // setgendervalues(newGendervalues)
    // setUser(newUser);
  

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
