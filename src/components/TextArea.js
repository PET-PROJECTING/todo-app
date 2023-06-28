import { css } from "@emotion/css";
import { styles } from ".";

export const TextArea = ({
  title,
  id,
  name,
  columns = 20,
  rows = 20,
  placeholder = "Insert your text here",
}) => {
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
      <textarea
        id={id}
        name={name}
        rows={rows}
        cols={columns}
        placeholder={placeholder}
        className={css`
          font-size: 20px;
          padding: 4px 6px;
        `}
      ></textarea>
    </fieldset>
  );
};