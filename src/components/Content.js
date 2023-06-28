import React, { useState, useContext } from "react";
import { css } from "@emotion/css";
import {
  List,
  ItemDescription,
  Toastr,
  styles, Button, Modal
} from ".";
import { 
  SelectedItemContext,
  ItemsContext,
  ToastrContext,
  OpenModalContext,
} from "../contexts";

export const Content = () => {
  const [selectedItemId, setSelectedItemId] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const [items, setItems] = useState(useContext(ItemsContext)); // Create custom hook and implement localStorage
  const [toastr, setToastr] = useState({ //TODO: Put in separate component for logic consolidation
    type: "success",
    status: false,
    children: "Success", //Q&A: Maybe worth renaming to message/text etc.
    onClose: () => setToastr({ ...toastr, status: false }),
    call(params) {
      setToastr({...toastr, ...params, status: true })
    }
  });

  // TODO: Move to dispatcher
  const handleCreate = (item) => {
    setSelectedItemId(item.id);
    setItems([...items, item]);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete this item?");
    if (!confirm) return;

    // setToastr({ ...toastr, status: true, type: "success", children: "Task was deleted" }); //TODO: Think about custom useToastr() hook
    toastr.call({ type: "success", children: "TODO Item was deleted" })

    const selected = items.find((item) => item.id !== id)
    setSelectedItemId((selected && selected.id) || null);
    setItems(items.filter((item) => item.id !== id)); //TODO: Implement Redux?
  };

  const handleItemClick = (id) => setSelectedItemId(id);

  const selectedItem = items.find((item) => item.id === Number(selectedItemId));
  
  return ( // Q&A: Merge these contexts? N
    <SelectedItemContext.Provider value={selectedItem}> 
      <ItemsContext.Provider value={items}>
        <ToastrContext.Provider value={toastr}>
          <OpenModalContext.Provider value={openModal} >
          <main
            className={css`
              display: flex;
              height: calc(90vh + 6px);
              margin: .1em .2em .2em;
              padding: 2px 0;
              border: 4px solid ${styles.MAIN_BG_COLOR};
              border-radius: 10px;
            `}
          >
            {(items.length > 0) ? (
              <>
                <List
                  handleCreate={handleCreate}
                  handleClick={handleItemClick}
                  setOpenModal={setOpenModal}
                />
                <ItemDescription
                  handleDelete={handleDelete}
                />
              </>
            ) : (
              <div className={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              `}>
                <span
                className={css`
                  display: flex;
                  width: 100vw;
                  align-items: center;
                  justify-content: center;
                  padding-top: 100px;
                  margin-bottom: 20px;
                `}
                >
                  No items yet
                </span>
                <Button
                  onClick={() => setOpenModal(true)}
                  style={{
                    width: "200px",
                    minHeight: "60px"
                  }}
                >
                  Add new
                </Button>
              </div>
            )
            }
            <Modal
              onClose={() => setOpenModal(false)}
              handleCreate={handleCreate}
              handleDelete={handleDelete}
            >
              Add new TODO item
            </Modal>
            <Toastr />
          </main>
          </OpenModalContext.Provider>
        </ToastrContext.Provider>
      </ItemsContext.Provider>
    </SelectedItemContext.Provider>
  );
};
