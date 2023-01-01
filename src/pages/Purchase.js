import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import FormAlert from "../components/FormAlert";

const Purchase = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    questions: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],

    max_drivers: 0,
  });

  const [isValidName, setIsValidName] = useState(false);
  const [isValidQuestions, setIsValidQuestions] = useState(false);
  const [isValidMax_drivers, setIsValidMax_drivers] = useState(false);
  let submitForm = undefined;
  const handleChange = (e) => {
    const { name, value, type, checked, id } = e.target;

    setFormData((prevFormData) => {
      const newQuestions = prevFormData.questions.map((question, index) => {
        return index + 1 == id ? checked : question;
      });
      if (type === "checkbox") {
        return {
          ...prevFormData,
          [name]: newQuestions,
        };
      } else {
        return {
          ...prevFormData,
          [name]: value,
        };
      }
    });
  };

  const checkValidation = () => {
    const { name, questions, max_drivers } = formData;
    const validName = name.length > 1;
    const validQuestions = questions.includes(true);
    const validMax_drivrers = max_drivers > 0;

    setIsValidName(validName ? true : false);
    setIsValidQuestions(validQuestions ? true : false);
    setIsValidMax_drivers(validMax_drivrers ? true : false);
  };
  const questionsOptions = props.questions.map((question) => {
    return (
      <div key={question.id}>
        <input
          id={question.id}
          name="questions"
          value={question.id}
          type="checkbox"
          onChange={handleChange}
        />
        <label htmlFor={question.id}>{question.title}</label>

        <br />
      </div>
    );
  });
  const validtaeForm = () => {
    return isValidName && isValidQuestions && isValidMax_drivers;
  };

  const resetFormValues = () => {
    setFormData({
      name: "",
      questions: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],

      max_drivers: 0,
    });
  };

  submitForm = (e) => {
    e.preventDefault();

    console.log(formData);

    if (validtaeForm()) {
      resetFormValues();
      //  document.getElementById("purchase-form").reset();
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      };
      fetch("http://localhost:4000/companies/", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    } else console.log("not valid!");
  };

  return (
    <div>
      <Header />
      <form
        onMouseMove={checkValidation}
        id="purchase-form"
        className="purchase-form"
        action=""
      >
        <b>
          <label htmlFor="">שם החברה:</label>
        </b>
        <input
          className="input-text"
          name="name"
          type="text"
          placeholder="שם החברה"
          onChange={handleChange}
          value={formData.name}
        />
        {!isValidName && (
          <FormAlert text="נא למלא את שם החברה - 2 תווים לפחות" />
        )}
        <br />
        <br />
        <b>
          <label htmlFor="">אילו שאלות לפתוח למשתמש?</label>
        </b>

        <br />
        {questionsOptions}
        {!isValidQuestions && <FormAlert text="אילו שאלות לפתוח למשתמש?" />}

        <br />
        <b>
          <label htmlFor="">כמות נהגים</label>
        </b>
        <input
          className="input-text"
          name="max_drivers"
          type="number"
          min="0"
          placeholder="מקסימום נהגים"
          onChange={handleChange}
          value={formData.max_drivers}
        />
        {!isValidMax_drivers && (
          <FormAlert text="נא להכניס מספר נהגים בין 1-100" />
        )}

        <Button
          text="שמור"
          submitForm={submitForm}
          checkValidation={checkValidation}
        />
      </form>
    </div>
  );
};

export default Purchase;
