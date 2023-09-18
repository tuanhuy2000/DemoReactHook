import { useState } from "react";

const GenerateOTP = (props) => {
  const [orgOTP, setOrgOTP] = useState("");

  const handleClickButton = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    props.setOrgOTP(otp);
    props.setIsDisable(false);
    props.setIsWait(true);
    setOrgOTP(otp);
  };

  return (
    <div className="generate-otp-container">
      <button onClick={() => handleClickButton()}>GenerateOTP</button>
      <div className="title">Your OTP: {orgOTP}</div>
    </div>
  );
};

export default GenerateOTP;
