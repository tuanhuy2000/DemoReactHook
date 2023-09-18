import { useState } from "react";
import OtpInput from "react-otp-input";
import CountDown from "./CountDown";
import CountDownAnimation from "./CountDownAnimation";

const InputOtp = (props) => {
  const [otp, setOtp] = useState("");

  const handleChange = (otp) => {
    setOtp(otp);
    props.setUserOTP(otp);
  };

  const handleConfirmOTP = () => {
    props.handleSubmitOTP();
  };

  const handleClearBtn = () => {
    setOtp("");
  };

  return (
    <div className="input-otp-container">
      <div className="title">Enter varification code</div>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
        inputStyle={"input-custom"}
      />
      {/* <div>
        <CountDownAnimation />
      </div> */}
      <div className="timer">
        <CountDown
          setIsDisable={props.setIsDisable}
          isWait={props.isWait}
          setIsWait={props.setIsWait}
        />
      </div>
      <div className="action">
        <button className="clear" onClick={() => handleClearBtn()}>
          Clear
        </button>
        <button
          className="confirm"
          onClick={() => handleConfirmOTP()}
          disabled={props.isDisable}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default InputOtp;
