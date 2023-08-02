import { css } from "@emotion/css";
import { styles } from ".";
import { Field } from "formik";
import {useContext} from "react";
import {FormikValidationContext} from "../contexts";

export const TextArea = ({
  title,
  id,
  name,
  columns = 20,
  rows = 13,
  placeholder = "Insert your text here",
}) => {

  const fieldHelpers = useContext(FormikValidationContext);
  const fieldHelper = fieldHelpers[name];

  return (
    <fieldset
      className={css`
        border: 2px solid ${styles.MAIN_BG_COLOR};
        margin: 10px 20px;
      `}
    >
      <legend
        className={css`
          margin: 2px;
        `}
      >
        {title}
      </legend>
      <Field
        as="textarea"
        id={id}
        name={name}
        rows={rows}
        cols={columns}
        placeholder={placeholder}
        className={css`
          font-size: 20px;
          padding: 4px 6px;
          resize: none;
          width: calc(100% - 20px);
          ${fieldHelper.isValidationFailed && fieldHelper.failingStyles}
        `}
      ></Field>
      {fieldHelper.isValidationFailed && fieldHelper.renderErrorMessage()}
    </fieldset>
  );
};
