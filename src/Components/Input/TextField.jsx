import { useState } from "react";
import "./TextField.css";

const TextField = (props) => {
  const { error, placeholder,formData,setFormData,val }=props;
  const [labelStyles, setLabelStyles] = useState({
    bottom: "12px",
    opacity: 0.8,
    color: "grey"
  });
  const changeText = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const modifyLabelPosition = (type) => {
    if (val)
      return setLabelStyles({ bottom: "40px", opacity: 0.9, color: "grey" });
    if (error && !val)
      return setLabelStyles({ bottom: "40px", opacity: 0.8, color: "red" });
    if (type === "focusIn")
      return setLabelStyles({ bottom: "40px", opacity: 0.9, color: "grey" });
    return setLabelStyles({ bottom: "12px", opacity: 0.8, color: "grey" });
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
        style={{
          borderBottom:
            error && !val ? "2px solid red" : "2px solid rgb(10,10,10)"
        }}
      />
    </div>
  );
};

export default TextField;
