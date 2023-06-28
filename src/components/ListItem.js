import { useContext } from "react";
import { css } from "@emotion/css";
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
        height: 80px;
        margin: .1em .2em .2em;
        padding: 10px 20px 0 20px;
        border: 2px solid ${styles.MAIN_BG_COLOR};
        border-radius: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        ${isSelected && `
          color: ${styles.MAIN_COLOR};
          background-color: ${styles.MAIN_BG_COLOR};
          border-color: ${styles.MAIN_COLOR};
        `}

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
      <div>
        <span
          className={css`
            display: inline-box;
            text-decoration: underline;
            text-transform: capitalize;
          `}
        >
          {title}
        </span>
        <span
          className={css`
            float: right;
          `}
        >
          {createdAt}
        </span>
      </div>
      <div
        className={css`
          margin-top: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
        `}
      >
        {message}
      </div>
    </div>
  );
};
