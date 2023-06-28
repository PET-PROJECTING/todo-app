import { css } from "@emotion/css";
import { useContext } from "react";
import { SelectedItemContext } from "../contexts";
import { styles } from ".";

export const ListItem = ({ item, onClick }) => {
  const selectedItemId = useContext(SelectedItemContext).id;
  const { id, title, message, createdAt } = item;
  const isSelected = id === selectedItemId;

  return (
    <div
      id={id}
      className={css`
        border: 2px solid ${styles.MAIN_BG_COLOR};
        ${isSelected && `
          color: ${styles.MAIN_COLOR};
          background-color: ${styles.MAIN_BG_COLOR};
          border-color: ${styles.MAIN_COLOR};
        `}
        margin: .1em .2em .2em;
        border-radius: 10px;
        min-height: 60px;
        padding: 10px 20px 0 20px;
        &:hover {
          background: rgb(2, 0, 36);
          background: linear-gradient(
            90deg,
            rgba(30, 144, 255, 1) 0%,
            rgba(0, 212, 255, 1) 100%
          );
        }
      `}
      onClick={onClick}
    >
      <div>{title}</div>
      <span
        className={css`
          float: right;
        `}
      >
        {createdAt}
      </span>
      <span
        className={css`
          overflow: hidden;
          text-overflow: ellipsis;
        `}
      >
        {message}
      </span>
    </div>
  );
};
