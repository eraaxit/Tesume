import { useState } from "react";
import "./TextField.css";

const TextField = (props) => {
<<<<<<< HEAD
  const { error, placeholder,formData,setFormData,val }=props;
=======
  const { placeholder,formData,setFormData,val }=props;
>>>>>>> cf8bd355a76ad8dbb72459dcbb0c099d3a56bb7c
  const [labelStyles, setLabelStyles] = useState({
    bottom: "10px",
    opacity: 0.8,
    color: "black"
  });
  const changeText = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const modifyLabelPosition = (type) => {
<<<<<<< HEAD
    if (val)
      return setLabelStyles({ bottom: "40px", opacity: 0.9, color: "grey" });
    if (error && !val)
      return setLabelStyles({ bottom: "40px", opacity: 0.8, color: "red" });
    if (type === "focusIn")
      return setLabelStyles({ bottom: "40px", opacity: 0.9, color: "grey" });
    return setLabelStyles({ bottom: "12px", opacity: 0.8, color: "grey" });
=======
    if (val){
      if(window.innerWidth<800)
      return setLabelStyles({ bottom: "30px", opacity: 0.9, color: "grey" });
    return setLabelStyles({ bottom: "45px", opacity: 0.9, color: "grey" })
    }
    if (type === "focusIn"){
      if(window.innerWidth<800)
        return setLabelStyles({ bottom: "30px", opacity: 0.9, color: "grey" });
      return setLabelStyles({ bottom: "45px", opacity: 0.9, color: "grey" })}
    return setLabelStyles({ bottom: "12px", opacity: 0.8, color: "black" });
>>>>>>> cf8bd355a76ad8dbb72459dcbb0c099d3a56bb7c
  };

  return (
    <div className="input_wrapper">
      <label style={labelStyles} onClick={() => modifyLabelPosition("focusIn")}>
        {placeholder}
      </label>

      <input
        onFocus={() => modifyLabelPosition("focusIn")}
        onBlur={() => modifyLabelPosition("focusOut")}
        onChange={changeText}
        value={formData.val}
<<<<<<< HEAD
        style={{
          borderBottom:
            error && !val ? "2px solid red" : "2px solid rgb(10,10,10)"
        }}
=======
        name={val}
>>>>>>> cf8bd355a76ad8dbb72459dcbb0c099d3a56bb7c
      />
    </div>
  );
};

export default TextField;