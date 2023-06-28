import { css } from "@emotion/css";
import { styles } from ".";

export const FieldInput = ({ label, text }) => {
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
      <input 
        type="text"
        placeholder="Enter your title"
        className={css`
          font-size: 20px;
          padding: 4px 6px;
          width: calc(100% - 20px);
        `}  
      ></input>
    </fieldset>
  );
};
