import { css } from "@emotion/css";
import { styles } from ".";

export const FieldLabel = ({ label, text }) => {
  return (
    <fieldset className={css`
      border: 2px solid ${styles.MAIN_BG_COLOR};
      margin: 10px 20px;
    `}>
      <legend
        className={css`
          margin: 2px
        `}
      >{label}</legend>
      <span>{text}</span>
    </fieldset>
  );
};
