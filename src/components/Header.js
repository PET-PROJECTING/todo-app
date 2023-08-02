import { styles } from ".";
import { css } from "@emotion/css";
import PropTypes from "prop-types";

export const Header = ({ children }) => {
  return (
    <header
      className={css`
        height: 5vh;
        margin: 0.1em 0.2em 0.2em;
        padding-top: 20px;
        text-align: center;
        color: ${styles.MAIN_COLOR};
        background-color: ${styles.MAIN_BG_COLOR};
        border-radius: 10px;
      `}
    >
      {children}
    </header>
  );
};

Header.displayName = "Header";

Header.propTypes = {
  children: PropTypes.string.isRequired,
};
