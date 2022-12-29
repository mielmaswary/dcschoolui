import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import {
  Routes,
  Navigate,
  Route,
  useLocation,
  useParams,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import DriverLogin from "../components/DriverLogin";

const Home = (props) => {
  const [isSubscribed, setIsSubscribed] = useState(true);
  const h2Text = isSubscribed ? "כניסה לקורס" : "רישום נהג חדש";
  const switchBtnText = isSubscribed
    ? "עדיין לא רשום? הוספת נהג חדש"
    : "נהג רשום? לכניסה לקורס";
  console.log(props.compenyId);
  const handleSwitchForms = () => {
    setIsSubscribed((prev) => !isSubscribed);
  };
  return (
    <>
      <div className="home-bg-img">
        <div>
          <h2>{h2Text}טטטטטטט</h2>
        </div>
        <DriverLogin isSubscribed={isSubscribed} />
        <div onClick={handleSwitchForms} className="white-link">
          {switchBtnText}
        </div>
      </div>
    </>
  );
};

export default Home;
