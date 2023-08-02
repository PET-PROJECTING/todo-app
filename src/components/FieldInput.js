import { css } from "@emotion/css";
import { styles } from ".";
import { Field } from 'formik';
import { useContext } from "react";
import { FormikValidationContext } from "../contexts";

export const FieldInput = ({ label, name, placeholder = "Insert your text here" }) => {

  const fieldHelpers = useContext(FormikValidationContext);
  const fieldHelper = fieldHelpers[name];

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
      <Field
        as="input"
        data-value 
        type="text"
        name={name}
        placeholder={placeholder}
        className={css`
          font-size: 20px;
          padding: 4px 6px;
          width: calc(100% - 20px);
          ${fieldHelper.isValidationFailed && fieldHelper.failingStyles}
        `}
      />{fieldHelper.isValidationFailed && fieldHelper.renderErrorMessage()}
    </fieldset>
  );
};
