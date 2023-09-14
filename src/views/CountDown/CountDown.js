import React, { useState, useEffect } from "react";

class CountDown extends React.Component {
  state = {
    count: 5,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   console.log("abc");
    // }, 3000);
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        //this.props.onTimeUp();
      }
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

const NewCountDown = (props) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) {
      props.onTimeUp();
      return;
    }

    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <div>{count}</div>;
};

export { CountDown, NewCountDown };
