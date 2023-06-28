import { useState } from "react";
import { css } from "@emotion/css";
import { List, ItemDescription } from ".";
import { SelectedItemContext } from "../contexts";
import { styles } from ".";


export const Content = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  const items = [
    { id: 1, title: "Hello", message: "aaaaaaaaaaa", createdAt: "2022-20-12" },
    { id: 2, title: "Worlds", message: "bbbbbbbbbbb", createdAt: "2022-20-12" },
    { id: 3, title: "Foo", message: "cccccccccc", createdAt: "2022-20-12" },
    { id: 4, title: "Bar", message: "ddddddddddd", createdAt: "2022-20-12" },
    { id: 5, title: "Title", message: "message body", createdAt: "2023-16-12" },
    { id: 5, title: "Title", message: "message body", createdAt: "2023-16-12" },
    { id: 5, title: "Title", message: "message body", createdAt: "2023-16-12" },
    { id: 5, title: "Title", message: "message body", createdAt: "2023-16-12" },
    { id: 5, title: "Title", message: "message body", createdAt: "2023-16-12" },
    { id: 5, title: "Title", message: "message body", createdAt: "2023-16-12" },
    { id: 5, title: "Title", message: "message body", createdAt: "2023-16-12" },
    { id: 5, title: "Title", message: "message body", createdAt: "2023-16-12" },
    { id: 5, title: "Title", message: "message body", createdAt: "2023-16-12" },
    { id: 5, title: "Title", message: "message body", createdAt: "2023-16-12" },
    { id: 5, title: "Title", message: "message body", createdAt: "2023-16-12" },
    { id: 5, title: "Title", message: "message body", createdAt: "2023-16-12" },
    { id: 5, title: "Title", message: "message body", createdAt: "2023-16-12" },
    { id: 5, title: "Title", message: "message body", createdAt: "2023-16-12" },
    { id: 5, title: "Title", message: "message body", createdAt: "2023-16-12" },
  ];

  return (
    <SelectedItemContext.Provider value={items[selectedItem - 1]}>
      <main
        className={css`
          display: flex;
          border: 4px solid ${styles.MAIN_BG_COLOR};
          margin: .1em .2em .2em;
          border-radius: 10px;
          padding: 2px 0;
          height: calc(90vh + 6px);
        `}
      >
        <List items={items} onClick={setSelectedItem} />
        <ItemDescription />
      </main>
    </SelectedItemContext.Provider>
  );
};
