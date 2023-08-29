import { useEffect } from "react";
import AndroidIcon from "../AndroidIcon/AndroidIcon";
import AppleIcon from "../AppleIcon/AppleIcon";
import { useState } from "react";
import { getLocalData } from "../../helpers/getLocalData";

const LOCAL_STORAGE_PHONES_KEY = "phones";

const Counter = ({ defaultAndroid }) => {
  const [android, setAndroid] = useState(
    getLocalData(LOCAL_STORAGE_PHONES_KEY, "android", defaultAndroid)
  ); // 10 => 20
  const [iphone, setIphone] = useState(getLocalData(LOCAL_STORAGE_PHONES_KEY, "iphone", 0));

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_PHONES_KEY,
      JSON.stringify({ android, iphone })
    );
  }, [android, iphone]);

  const handleUpdate = (event) => {
    const { name } = event.target;
    switch (name) {
      case "android":
        setAndroid((prev) => prev + 1);
        break;
      case "iphone":
        setIphone((prev) => prev + 1);
        break;
      default:
    }
  };

  return (
    <div className=" mx-auto w-75 mb-5 p-5 text-white bg-dark rounded-3 row">
      <div className="col-6 d-flex flex-column align-items-center gap-5">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: 100, height: 100 }}
        >
          <AndroidIcon
            width={50 + android - iphone}
            height={50 + android - iphone}
          />
        </div>
        <button
          type="button"
          name="android"
          className="btn p-3 btn-outline-light mx-2"
          onClick={handleUpdate}
        >
          Android
        </button>
      </div>

      <div className="col-6 d-flex flex-column align-items-center gap-5">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: 100, height: 100 }}
        >
          <AppleIcon
            width={50 + iphone - android}
            height={50 + iphone - android}
          />
        </div>
        <button
          type="button"
          name="iphone"
          className="btn p-3 btn-outline-light mx-2"
          onClick={handleUpdate}
        >
          iPhone
        </button>
      </div>
    </div>
  );
};

export default Counter;

// export default class Counter extends Component {
//   state = {
//     android: 0,
//     iphone: 0,
//   };

//   render() {
//     const { android, iphone } = this.state;
//     return (
//       <div className=" mx-auto w-75 mb-5 p-5 text-white bg-dark rounded-3 row">
//         <div className="col-6 d-flex flex-column align-items-center gap-5">
//           <div
//             className="d-flex justify-content-center align-items-center"
//             style={{ width: 100, height: 100 }}
//           >
//             <AndroidIcon
//               width={50 + android - iphone}
//               height={50 + android - iphone}
//             />
//           </div>
//           <button
//             type="button"
//             name="android"
//             className="btn p-3 btn-outline-light mx-2"
//             onClick={() => this.setState((prev) => ({ android: prev.android + 1 }))}
//           >
//             Android
//           </button>
//         </div>

//         <div className="col-6 d-flex flex-column align-items-center gap-5">
//           <div
//             className="d-flex justify-content-center align-items-center"
//             style={{ width: 100, height: 100 }}
//           >
//             <AppleIcon
//               width={50 + iphone - android}
//               height={50 + iphone - android}
//             />
//           </div>
//           <button
//             type="button"
//             name="iphone"
//             className="btn p-3 btn-outline-light mx-2"
//             onClick={() => this.setState((prev) => ({ iphone: prev.iphone + 1 }))}
//           >
//             iPhone
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
