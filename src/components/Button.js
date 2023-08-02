import "./Button.css";
import PropTypes from "prop-types";
import { css } from "@emotion/css";
import { styles } from ".";

export const Button = ({ children, onClick, type = "button", ...props }) => {
  return (
    <button
      className={css`
        padding: .4em 2em;
        font-size: .8rem;
        color: ${styles.MAIN_COLOR};
        background-color: ${styles.MAIN_BG_COLOR};
        border: 2px solid ${styles.MAIN_COLOR};
        border-radius: 10px;
    
        &:hover {
          background: rgb(2, 0, 36);
          background: linear-gradient(
            90deg,
            rgba(30, 144, 255, 1) 0%,
            rgba(0, 212, 255, 1) 100%
          );
        }
      `}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
