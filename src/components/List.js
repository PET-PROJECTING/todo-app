import { useState, useContext } from "react";
import { css } from "@emotion/css";
import { 
  ListItem,
  Button,
  Modal
} from ".";
import { 
  OpenModalContext,
  ItemsContext
} from "../contexts";
import PropTypes from "prop-types";

export const List = ({ handleClick, setOpenModal }) => {
  const items = useContext(ItemsContext);

  const listItems = items.map((item) => {
    return (
      <ListItem
        key={item.id}
        item={item}
        onClick={(e) => handleClick(e.currentTarget.id)}
      />
    );
  });
  
  return (
      <div
        className={css`
          width: 30%;
          overflow-y: auto;
        `}
      >
        <Button 
          onClick={() => setOpenModal(true)}
          style={{
            width: "calc(100% - 6px)",
            minHeight: "60px",
            margin: ".1em .2em .2em",
          }}
        >
          Add new
        </Button>
        {listItems}
      </div>
  );
};

List.displayName = "List";

List.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
