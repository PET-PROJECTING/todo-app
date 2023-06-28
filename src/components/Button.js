import "./Button.css";
import PropTypes from "prop-types";
import { css } from "@emotion/css";
import { styles } from ".";

export const Button = ({ text, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={css`
        font-size: .8rem;
        padding: .4em 2em;
        border: 2px solid ${styles.MAIN_COLOR};
        background-color: ${styles.MAIN_BG_COLOR};
        color: ${styles.MAIN_COLOR};
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
      {...props}
    >
      {text}
    </button>
  );
};

Button.displayName = "Button";

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
