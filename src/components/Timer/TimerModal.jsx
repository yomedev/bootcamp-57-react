import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ONE_SECOND = 1000;

function formatTime(time) {
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

export const TimerModal = () => {
  const [time, setTime] = useState(new Date());
  const intervalId = useRef(null);

  const handleStart = () => {
    if (!intervalId.current) {
      intervalId.current = setInterval(() => setTime(new Date()), ONE_SECOND); // 1
    }
  };

  const handleStop = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  console.log(intervalId);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
      <h2 className="h1 m-5">{formatTime(time)}</h2>
      <button onClick={handleStart} type="button" className="btn btn-primary">
        Start
      </button>
      <button onClick={handleStop} type="button" className="btn btn-danger">
        Stop
      </button>
    </div>
  );
};

// export class TimerModal extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       // console.log("setInterval");
//       this.setState({ time: new Date() });
//     }, ONE_SECOND);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   formatTime() {
//     const { time } = this.state;

//     const hours = String(time.getHours()).padStart(2, "0");
//     const minutes = String(time.getMinutes()).padStart(2, "0");
//     const seconds = String(time.getSeconds()).padStart(2, "0");

//     return `${hours}:${minutes}:${seconds}`;
//   }

//   render() {
//     return (
//       <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
//         <h2 className="h1 m-5">{this.formatTime()}</h2>
//         <button type="button" className="btn btn-primary">Start</button>
//         <button type="button" className="btn btn-danger">Stop</button>
//       </div>
//     );
//   }
// }
