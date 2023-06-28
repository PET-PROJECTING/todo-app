import { css } from "@emotion/css";
import { styles } from ".";
import PropTypes from "prop-types";

export const FieldLabel = ({ label, children }) => {
  return (
    <fieldset 
      className={css`
        margin: 10px 20px;
        border: 2px solid ${styles.MAIN_BG_COLOR};
      `}
    >
      <legend
        className={css`
          margin: 2px
        `}
      >
        {label}
      </legend>

      <span>{children}</span>
    </fieldset>
  );
};

FieldLabel.displayName = "FieldLabel";

FieldLabel.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
