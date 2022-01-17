import React, { useReducer } from "react";
import FormContext from "./FormContext.js";
import FormReducer from "./FormReducer.js";
import { ADD_DATA} from "./types.js";
import upload_img from "../Pages/FillData/upload_img.svg";

const FormState = (props) => {
  
  const initialState = {
      name: "Jasleen Kaur",
      currentProfession: "Android Developer at SBI",
      socialLinks: {
        linkedin: "https://linkedin.com",
        github: "https://linkedin.com",
        phone: "+91 1234567890",
        website: "https://jsjasleen.com",
        email: "mailto:jasleen@email.com",
      }, 
      displayPicture:`${upload_img}`,
      educations: [
        {
          
            institution_name: "HUIO Public School, Chennai",
            enroll_year: "1900",
            passout_year: "2003",
            grades: "9.2"
        }
      ], 
      skills: [
        {
          skillName:"Creative",
          proficiency:"designer"
      }
      ],
      experiences: [
        {
          title: "Designer",
          period: "3 years",
          organization: "fine designer" 
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
