import React from "react";
import {FormikValidationContext} from "../contexts";
import {useFormikContext} from "formik";
import {css} from "@emotion/css";

export const FormikHelper = ({ children }) => {
  const { errors, touched, values } = useFormikContext();
  const formikData = {};
  class FormikHelper {
    constructor(name) {
      this.name = name;
    }

    get failingStyles() {
      return (`
        border-color: red;
        color: red;
      `);
    }

    get isValidationFailed() {
      return ((errors[this.name] && touched[this.name]) || false);
    }

    renderErrorMessage() {
      return (
        <span
          className={css`
          font-size: .8em;
          border-color: red;
          color: red;
        `}
        >
        {errors[this.name]}
      </span>
      );
    }
  }

  Object.keys(values).map((fieldName) => {
    return formikData[fieldName] = new FormikHelper(fieldName)
  })

  return (
    <FormikValidationContext.Provider value={formikData}>
      {children}
    </FormikValidationContext.Provider>
  );
}
