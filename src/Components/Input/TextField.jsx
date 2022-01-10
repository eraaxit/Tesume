import { useState } from "react";
import "./TextField.css";

const TextField = (props) => {
  const { placeholder,formData,setFormData,val }=props;
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
        name={val}
      />
    </div>
  );
};

export default TextField;