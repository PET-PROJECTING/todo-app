import { css } from "@emotion/css";
import { useContext } from "react";
import { OpenModalContext } from "../contexts";
import { styles, FieldInput, Button, TextArea } from ".";

export const Modal = ({ title, onClose }) => {
  const isOpen = useContext(OpenModalContext);

  if (!isOpen) {
    return null;
  }

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
            border-bottom: 2px solid ${styles.MAIN_BG_COLOR}
          `}
        >
          <span>{title}</span>
        </div>
        <div>
          <FieldInput label="Title" text={"title"} />
          <TextArea 
            id="body"
            name="body"
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
          
          <Button onClick={onClose} text="Create" />
          <Button onClick={onClose} text="Close" />
        </div>
      </div>
    </div>
  )
};
