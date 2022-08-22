import React from "react";
export default function (props) {
  let data = props.data;
  return (
    <div className="col-5 input-effect">
      <div
        onClick={props.cb}
        style={{
          display: "flex",
          background: "#0153de",
          padding: 20,
          color: "#ffff",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.label}
      </div>
    </div>
  );
}
