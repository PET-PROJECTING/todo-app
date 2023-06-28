import { css } from "@emotion/css";
import { useContext } from "react";
import { SelectedItemContext } from "../contexts";
import { 
  Button,
  FieldLabel,
  styles
} from ".";

export const ItemDescription = ({ handleDelete }) => {
  const item = useContext(SelectedItemContext);
  const { id, title, message, createdAt} = item;

  return (
    <div
      className={css`
        display: flex;
        width: 75vw;
        align-items: center;
        justify-content: center;
      `}
    >
      <div 
        className={css`
          height: 80vh;      
          width: 60vw;
          margin: .1em .2em .2em;
          padding: 2px 0;
          border: 4px solid ${styles.MAIN_BG_COLOR};
          border-radius: 10px;
        `}
      >
        <FieldLabel label="ID">{id}</FieldLabel>
        <FieldLabel label="Title">{title}</FieldLabel>
        <FieldLabel label="Body">{message}</FieldLabel>
        <FieldLabel label="Created at">{createdAt}</FieldLabel>
        <div 
          className={css`
            display: flex;
            position: absolute;
            bottom: 10vh;
            left: 54vw;
            width: 400px;
            justify-content: space-around;
          `}
        >
          <Button onClick={() => handleDelete(id)}>Delete</Button>
        </div>
      </div>
    </div>
  );
};


