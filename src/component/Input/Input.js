import React from "react";
import "./input.css";
export default function Input(props) {
  let data = props.data;
  console.log(props.state);
  return (
    <div className="col-3 input-effect">
      <input
        className="effect-16"
        value={props.state[data.field]}
        type={data.inputType}
        onChange={(e) => {
          props.cb(e.target.value, data.field);
        }}
        placeholder=""
        required={data.required ? data.required : false}
      />
      <label
        style={
          props.state.errorFields.includes(data.field)
            ? { color: "#f70000" }
            : {}
        }
      >
        {data.label}
      </label>
      <span className="focus-border"></span>
    </div>
  );
}
