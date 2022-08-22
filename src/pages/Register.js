import React from "react";
import SERVICECONSTANTS from "../constant/Service-Constant";
import Input from "../component/Input/Input";
import Button from "../component/Button/Button";
import "./Register.css";
export default function Register(props) {
  const [state, setState] = React.useState({
    Country: "",
    State: "",
    city: "",
    email: "",
    fName: "",
    lName: "",
    mName: "",
    mobile: "",
    error: false,
    errorFields: [],
  });
  function setter(text, field) {
    let errorFields = state.errorFields;
    if (errorFields.length > 0) {
      errorFields.find((v, i, a) => {
        if (v === field) {
          errorFields.splice(i, 1);
        }
      });
    }
    setState({ ...state, [field]: text, errorFields: errorFields });
  }
  function validateEmail(email) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }
  function onNextClick() {
    let errorMsg = [];
    let errorFields = [];
    if (state.fName === "") {
      console.log(state);
      errorMsg.push("First Name is required");
      errorFields.push("fName");
    }
    if (state.lName === "") {
      errorMsg.push("Last Name is required");
      errorFields.push("lName");
    }
    if (state.mName === "") {
      errorMsg.push("Middle Name is required");
      errorFields.push("mName");
    }
    if (state.mobile.length !== 10) {
      errorMsg.push("Middle Name is required");
      errorFields.push("mobile");
    }
    if (!validateEmail(state.email)) {
      errorMsg.push("Error in Email field");
      errorFields.push("email");
    }

    if (errorMsg.length === 0) {
      alert("All validations cleared");
      setState({
        Country: "",
        State: "",
        city: "",
        email: "",
        fName: "",
        lName: "",
        mName: "",
        mobile: "",
        error: false,
        errorFields: [],
      });
    } else {
      console.log(errorMsg);
      setState({
        ...state,
        error: true,
        errorMsg: errorMsg,
        errorFields: errorFields,
      });
    }
  }
  function switcher(data) {
    switch (data.type) {
      case "Input":
        return (
          <Input
            data={data}
            cb={(text, field) => setter(text, field)}
            state={state}
          />
        );
      case "Button":
        return <Button data={data} cb={(text, field) => setter(text, field)} />;
      default:
        break;
    }
  }
  function toggle(URL) {
    window.open(URL, "_blank");
  }
  return (
    <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <div
        style={{
          width: "30%",
          background: "#0153de",
          minHeight: "100vh",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 20,
          color: "#fff",
        }}
      >
        <div
          style={{
            marginTop: "10%",
            justifyContent: "space-evenly",
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {SERVICECONSTANTS.REGISTER.showCase.map((eachField, i) => (
            <div
              key={i}
              onClick={() => toggle(eachField.url)}
              style={{
                display: "flex",
                flexDirection: "row",
                margin: 5,
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{ background: "#1a65e0", padding: 10, borderRadius: 10 }}
              >
                <img
                  src={eachField.icon}
                  width={50}
                  height={50}
                  alt={eachField.labe + "_logo"}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: 2,
                  justifyContent: "center",
                  marginLeft: 10,
                }}
              >
                <h3>{eachField.label}</h3>
                <p>{eachField.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          width: "60%",
          flexDirection: "column",
          marginTop: "10%",
          padding: 10,
          margin: 5,
        }}
      >
        <div
          style={{
            flexDirection: "column",
            marginTop: "10%",
            padding: 10,
            margin: 5,
          }}
        >
          <h2 style={{}}>Hi There, Please sign up to continue</h2>
          {SERVICECONSTANTS.REGISTER.Name.map((eachField, i) => (
            <div key={i}>{switcher(eachField)}</div>
          ))}
          <div>
            <Button
              data={{
                label: "Next",
                inputType: "text",
                type: "Button",
                field: "next",
              }}
              cb={() => onNextClick()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
