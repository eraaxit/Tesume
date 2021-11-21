import { useState } from "react";
import TextField from "../../Input/TextField";
import "./FillData.css";

const FillData = () => {
    // const [ displayPicture, setDisplayPicture ] = useState("");
    const [ formData, setFormData ] = useState({
        name: "",
        currentProfession: "",
        socialLinks: {
            linkedin: "",
            github: "",
            phone: "",
            website: "",
            email: ""
        },
        education: [],
        skills: [],
        experience: [],
    })

    return (
        <div className="filldata" style={{padding:"100px"}}>
            <h1>Tesume</h1>
            <TextField value={formData.name} placeholder="Name" onChange={e => setFormData({...formData, name: e.target.value})} />
            {/* <input value={formData.socialLinks.linkedin} onChange={e => setFormData({...formData, socialLinks: {linkedin: e.target.value}})} /> */}
        </div>
    )
}

export default FillData
