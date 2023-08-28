import { PropTypes } from "prop-types";
import { useRef } from "react";
import { useEffect } from "react";

export const Modal = ({ onModalClose, children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    console.dir(containerRef.current);
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        console.log(event.key);
        onModalClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onModalClose]);

  const handleBackdropClose = (event) => {
    if (event.target === event.currentTarget) {
      onModalClose();
    }
  };


  return (
    <>
      <div ref={containerRef} className="modal-backdrop fade show" />

      <div
        className="modal fade show"
        style={{ display: "block" }}
        onClick={handleBackdropClose}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onModalClose}
              />
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

// export class Modal extends Component {
//   handleKeyDown = (event) => {
//     if (event.key === "Escape") {
//       console.log(event.key);
//       this.props.onModalClose();
//     }
//   };

//   componentDidMount() {
//     window.addEventListener("keydown", this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//     window.removeEventListener("keydown", this.handleKeyDown);
//   }

//   handleBackdropClose = (event) => {
//     if (event.target === event.currentTarget) {
//       this.props.onModalClose();
//     }
//   };
//   render() {
//     const { onModalClose, children } = this.props;
//     return (
//       <>
//         <div className="modal-backdrop fade show" />

//         <div
//           className="modal fade show"
//           style={{ display: "block" }}
//           onClick={this.handleBackdropClose}
//         >
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Modal title</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   aria-label="Close"
//                   onClick={onModalClose}
//                 />
//               </div>

//               <div className="modal-body">{children}</div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export const Modal = ({ children, onModalClose }) => {
//   const handleBackdropClose = (event) => {
//     if (event.target === event.currentTarget) {
//       onModalClose();
//     }
//   };

//   return (
//     <>
//       <div className="modal-backdrop fade show" />

//       <div
//         className="modal fade show"
//         style={{ display: "block" }}
//         onClick={handleBackdropClose}
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Modal title</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 aria-label="Close"
//                 onClick={onModalClose}
//               />
//             </div>

//             <div className="modal-body">{children}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

Modal.propType = {
  children: PropTypes.node.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
