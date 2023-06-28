import { css } from "@emotion/css";
import { Formik, Form } from 'formik';
import { useContext } from "react";
import { OpenModalContext, ToastrContext } from "../contexts";
import {
  FieldInput,
  Button,
  TextArea,
  FormikHelper,
  styles,
} from ".";
import { ItemGenerator } from "../utilities";
import validationSchema from "./validationSchema";
import { FIELDS } from "../constants";

export const Modal = ({ children, onClose, handleCreate }) => {
  const isOpen = useContext(OpenModalContext);
  const toastr = useContext(ToastrContext);

  if (!isOpen) return null;

  return (
    <div
      className={css`
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
      `}
      onClick={onClose}
    >
      <div
        className={css`
          width: 40vw;
          height: 70vh;
          border-radius: 10px;
          background-color: ${styles.MAIN_COLOR};
          border: 2px solid ${styles.MAIN_BG_COLOR};
          display: flex;
          flex-direction: column;
          padding: 20px 10px;
          position: relative;
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={css`
            text-align: center;
            padding-bottom: 10px;
            margin-bottom: 20px;
            border-bottom: 2px solid ${styles.MAIN_BG_COLOR};
          `}
        >
          <span>{children}</span>
        </div>
        <Formik
          initialValues={{
            body: "",
            title: "",
          }}
          onSubmit={(formData) => {
            handleCreate(new ItemGenerator(formData.title, formData.body));
            onClose();
            toastr.call({ children: "TODO Item was added!"})
          }}
          validationSchema={validationSchema}

        >{({ errors, touched }) => (
          <Form>
            <FormikHelper>
              <div>
                <FieldInput
                  label="Title"
                  placeholder="Enter your title"
                  name={FIELDS.TITLE_FIELD}
                />
                <TextArea
                  id="body"
                  name={FIELDS.BODY_FIELD}
                  title="Body"
                />
              </div>
              <div
                className={css`
                  position: absolute;
                  bottom: 20px;
                  width: 80%;
                  left: 10%;
                  text-align: center;
                `}
              >
                <Button type="submit">Create</Button>
                <Button onClick={onClose}>Close</Button>
              </div>
              {/*{!isEmpty(errors) && toastr.call()}*/  /* TODO: Fix infinity loop */}
            </FormikHelper>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
