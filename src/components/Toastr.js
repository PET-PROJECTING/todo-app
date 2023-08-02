import { css } from "@emotion/css";
import { styles } from ".";
import { useContext, useEffect } from "react";
import { ToastrContext } from "../contexts";

const MAPPER = {
  "success": {
    statusColor: "green",
  },
  "warning": {
    statusColor: "orange",
  },
  "error": {
    statusColor: "red",
  }
};

export const Toastr = () => {
  const { status, children, type, onClose } = useContext(ToastrContext);

  if (!status) return null;

  useEffect(() => {
    setTimeout(onClose, 3000)
  }, []);

  return(
    <div
      className={css`
        display: flex;
        position: fixed;
        width: 300px;
        height: 100px;
        top: 5px;
        right: 20px;
        z-index: 5;
        align-items: center;
        justify-content: center;
        color: ${styles.MAIN_COLOR};
        background-color: ${styles.MAIN_BG_COLOR};
        border: 2px solid ${styles.MAIN_COLOR};
        border-radius: 10px;
        border-bottom: 4px solid ${MAPPER[type].statusColor};
        @-webkit-keyframes slide-in-elliptic-top-fwd {
          0% {
            -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
            -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
            opacity: 0;
          }
          100% {
            -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
            -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
            opacity: 1;
          }
        }
        -webkit-animation: slide-in-elliptic-top-fwd 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-in-elliptic-top-fwd 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      `}
    >
      <div
        role="close-button"
        className={css`
          position: absolute;
          width: 20px;
          height: 20px;
          top: 10px;
          right: 10px;
        `}
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#fff">
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
        </svg>
      </div>
      {children}
    </div>
  );
};
