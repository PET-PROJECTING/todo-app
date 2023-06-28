import { css } from "@emotion/css";
import { styles } from ".";
import PropTypes from "prop-types";

export const Header = ({ title }) => {
  return(
    <div className={css`
      margin: .1em .2em .2em;
      border-radius: 10px;
      background-color: ${styles.MAIN_BG_COLOR};
      height: 5vh;
      text-align: center;
      color: ${styles.MAIN_COLOR};
      padding-top: 20px;
    `}
    >
      {title}
    </div>
  );
};

Header.displayName = "Header";

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
