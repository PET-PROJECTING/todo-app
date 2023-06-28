import { css } from "@emotion/css";
import { ListItem, Button, Modal } from ".";
import { useState } from "react";
import { OpenModalContext } from "../contexts";

export const List = ({ items, onClick }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (e) => {
    onClick(e.currentTarget.id);
  }

  const mapItemsToListItems = items.map((item) => <ListItem key={item.id} item={item} onClick={handleClick} />);
  
  return (
    <OpenModalContext.Provider value={openModal} >
      <div
        className={css`
          width: 30%;
          overflow-y: auto;
        `}
      >
        <Button 
          text="Add new" 
          onClick={() => setOpenModal(true)}
          style={{
            width: "calc(100% - 6px)",
            minHeight: "60px",
            margin: ".1em .2em .2em",
          }}
        />
        {mapItemsToListItems}
        <Modal onClose={() => setOpenModal(false)} title="Add new TODO item"/>
      </div>
    </OpenModalContext.Provider>
  );
};
