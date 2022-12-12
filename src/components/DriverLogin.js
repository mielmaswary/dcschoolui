import React, { useState } from "react";
import FormAlert from "./FormAlert";
import Button from "./Button";

import { useNavigate } from "react-router-dom";

const DriverSubscribe = (props) => {
  const [formData, setFormData] = useState({ name: "", phoneNumber: "" });
  const [validName, setValidName] = useState(false);
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const btnText = props.isSubscribed ? "כניסה לקורס" : "הוספת נהג חדש";
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked, id } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
    console.log(formData);
  };
  const checkValidation = () => {
    const { name, phoneNumber } = formData;
    const validName = name.length > 1;
    const validPhoneNumber = phoneNumber.replace("-", "").length === 10;

    setValidName(validName ? true : false);
    setValidPhoneNumber(validPhoneNumber ? true : false);
  };
  const validtaeForm = () => {
    return validName && validPhoneNumber;
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (validtaeForm()) {
      setFormData({ name: "", phoneNumber: "" });
      navigate(`/course?driverId=${1}`);
    } else console.log("not valid!");
  };

  return (
    <div>
      {" "}
      <form
        id="add-new-driver-form"
        className="login-form"
        action=""
        onMouseMove={checkValidation}
      >
        <b>
          <label className="label" htmlFor="">
            שם הנהג:
          </label>
        </b>
        <input
          className="input-text"
          name="name"
          type="text"
          placeholder="שם הנהג"
          onChange={handleChange}
          value={formData.name}
        />
        {!validName && <FormAlert text="נא למלא את שם הנהג - 2 תווים לפחות" />}
        <br />
        <br />

        <b>
          <label className="label" htmlFor="">
            מספר טלפון
          </label>
        </b>
        <input
          className="input-text"
          name="phoneNumber"
          type="tel"
          placeholder="מספר טלפון תקין"
          onChange={handleChange}
          value={formData.phoneNumber}
        />
        {!validPhoneNumber && <FormAlert text="נא להכניס מספר טלפון תקין" />}

        <Button
          text={btnText}
          submitForm={submitForm}
          checkValidation={checkValidation}
        />
      </form>
    </div>
  );
};

export default DriverSubscribe;
