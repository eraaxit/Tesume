import React, { useReducer } from "react";
import FormContext from "./FormContext.js";
import FormReducer from "./FormReducer.js";
import { ADD_DATA} from "./types.js";

const FormState = (props) => {
  
  const initialState = {
      name: "",
      currentProfession: "",
      socialLinks: {
        linkedin: "",
        github: "",
        phone: "",
        website: "",
        email: "",
      }, 
      displayPicture:"",
      educations: [
        {
          institution_name: "",
          enroll_year: "",
          passout_year: "",
          grades: "",
        }
      ], 
      skills: [
        {
          skillName: "",
          proficiency: "",
        }
      ],
      experiences: [
        {
          title: "",
          period: "",
          organization: ""
        }
      ],
  };

  const [state, dispatch] = useReducer(FormReducer, initialState);

  const addData = (data) => {
    dispatch({ type: ADD_DATA, payload: data });
  };

  return (
    <FormContext.Provider
      value={{
      name:state.name,
      currentProfession:state.currentProfession,
      socialLinks: state.socialLinks,
      displayPicture:state.displayPicture,
      educations: state.educations, 
      skills: state.skills,
      experiences: state.experiences,
        addData,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};
export default FormState;
