import { useState } from "react";
import GenerateOTP from "./GenerateOTP";
import InputOtp from "./InputOTP";
import "./OTP.scss";

const OTP = () => {
  const [orgOTP, setOrgOTP] = useState("");
  const [userOTP, setUserOTP] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const [isWait, setIsWait] = useState(true);

  const handleSubmitOTP = () => {
    +orgOTP === +userOTP ? alert("true") : alert("fail");
  };

  return (
    <div className="otp-parent-container">
      <GenerateOTP
        setOrgOTP={setOrgOTP}
        setIsDisable={setIsDisable}
        setIsWait={setIsWait}
      />
      <InputOtp
        setUserOTP={setUserOTP}
        handleSubmitOTP={handleSubmitOTP}
        isDisable={isDisable}
        setIsDisable={setIsDisable}
        isWait={isWait}
        setIsWait={setIsWait}
      />
    </div>
  );
};

export default OTP;
