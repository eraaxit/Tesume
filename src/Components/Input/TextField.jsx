import { useState } from "react";
import "./TextField.css";

const TextField = ({ error, onChange, placeholder, value }) => {
  const [labelStyles, setLabelStyles] = useState({
    bottom: "12px",
    opacity: 0.8,
    color: "grey"
  });

  const modifyLabelPosition = (type) => {
    if (value)
      return setLabelStyles({ bottom: "32px", opacity: 0.9, color: "grey" });
    if (error && !value)
      return setLabelStyles({ bottom: "32px", opacity: 0.8, color: "red" });
    if (type === "focusIn")
      return setLabelStyles({ bottom: "32px", opacity: 0.9, color: "grey" });
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
        onChange={onChange}
        value={value}
        style={{
          borderBottom:
            error && !value ? "1px solid red" : "1px solid rgb(10,10,10)"
        }}
      />
    </div>
  );
};

export default TextField;
