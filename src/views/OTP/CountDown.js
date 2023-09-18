import { useEffect, useState } from "react";

const CountDown = (props) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) {
      props.setIsDisable(true);
      props.setIsWait(false);
      return;
    }
    const timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  useEffect(() => {
    if (props.isWait) setCount(5);
  }, [props.isWait]);

  return <div>{count}</div>;
};

export default CountDown;
