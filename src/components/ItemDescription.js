import { css } from "@emotion/css";
import { useContext } from "react";
import { SelectedItemContext } from "../contexts";
import { Button, styles, FieldLabel } from ".";

export const ItemDescription = () => {
  const { id, title, message, createdAt } = useContext(SelectedItemContext);

  return (
    <div
      className={css`
        width: 75vw;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div className={css`
        width: 60vw;
        height: 80vh;      
        border: 4px solid ${styles.MAIN_BG_COLOR};
        margin: .1em .2em .2em;
        border-radius: 10px;
        padding: 2px 0;
      `}
      >
        <FieldLabel label="ID" text={id} />
        <FieldLabel label="Title" text={title} />
        <FieldLabel label="Body" text={message} />
        <FieldLabel label="Created at" text={createdAt} />
        <div className={css`
          display: flex;
          justify-content: space-around;
          width: 400px;
          position: absolute;
          bottom: 10vh;
          left: 54vw;
        `}>
          <Button text="Edit" onClick={() => console.log("Clicked")}/>
          <Button text="Delete" onClick={() => console.log("Clicked")}/>
        </div>
      </div>
    </div>
  );
};
