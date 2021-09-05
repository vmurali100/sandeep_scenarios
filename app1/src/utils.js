export const returnUser=()=>{
    return {
      email:"",
      password:"",
      state:"",
      date:"",
      gender:"",
      subjects:[]
    }
  }

  export const returnGenderValues=()=>{
    return [
      {name:"Male",isChecked:false},
      {name:"Female",isChecked:false}
    ]
  }
  export const returnCheckBoxValues = ()=>{
    return [
      {name:"HTML",isChecked:false},
      {name:"CSS",isChecked:false},
      {name:"Javascript",isChecked:false},
      {name:"ReactJS",isChecked:false}]
  }