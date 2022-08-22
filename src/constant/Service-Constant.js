import Profile from "../assets/profile.png";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedIn.png";
let value = {
  REGISTER: {
    showCase: [
      {
        label: "Visit My Site",
        icon: Profile,
        desc: "Visit my own built website",
        url: "https://raghav-aadithya-resume.web.app/",
      },
      {
        label: "My Github Profile",
        icon: Github,
        desc: "View my Repos",
        url: "https://github.com/raghavaadi",
      },
      {
        label: "LinkedIn Profile",
        icon: LinkedIn,
        desc: "View my LinkedIn",
        url: "https://www.linkedin.com/in/raghav-aadithya/",
      },
    ],

    Name: [
      {
        label: "First Name",
        required: true,
        type: "Input",
        field: "fName",
        placeholder: "First Name",
        inputType: "text",
      },
      {
        label: "Last Name",
        required: true,
        field: "lName",
        type: "Input",
        placeholder: "Last Name",
        inputType: "text",
      },
      {
        label: "Middle Name",
        required: true,
        type: "Input",
        field: "mName",

        placeholder: "Middle Name",
        inputType: "text",
      },
      {
        label: "Email",
        inputType: "email",
        required: true,
        type: "Input",
        field: "email",
      },
      { label: "Mobile", inputType: "number", type: "Input", field: "mobile" },
      { label: "Country", inputType: "text", type: "Input", field: "Country" },
      { label: "city", inputType: "text", type: "Input", field: "city" },
      { label: "State", inputType: "text", type: "Input", field: "State" },
    ],
    OTHER: [],
  },
};

export default value;
