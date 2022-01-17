import { ADD_DATA } from "./types"

const FormReducer = (state,action)=>{
    switch(action.type){
        case ADD_DATA:
            return{
                ...state,
               socialLinks:action.payload.socialLinks,
                name:action.payload.name,
                currentProfession:action.payload.currentProfession,
                displayPicture:action.payload.displayPicture,
                educations:action.payload.educations,
                experiences:action.payload.experiences,
                skills:action.payload.skills
            }
        default:
            return state
    }
}

export default FormReducer