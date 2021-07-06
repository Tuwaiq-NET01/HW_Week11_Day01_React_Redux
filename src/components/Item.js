import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { contactEdited, contactDeleted } from "../action";

function Item(props) {
  const [editItem, setEditItem] = useState(() => props.item);
  const [isEditing, setIsEditing] = useState(() => false);

  const dispatch = useDispatch();

  const edit = (e) => {
    e.preventDefault();
    setIsEditing((bool) => !bool);

    dispatch(contactEdited({ ...editItem, index: props.index }));
  };

  const deleteContact = () => {
    dispatch(contactDeleted({ ...editItem, index: props.index }));
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={(e) => edit(e)}>
          <label>Number:</label>
          <input
            value={editItem.number}
            onChange={(e) =>
              setEditItem({ ...editItem, number: e.target.value })
            }
          />
          <label>Name:</label>
          <input
            value={editItem.name}
            onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <li>
          name {props.item.name} number {props.item.number}
          <button onClick={() => setIsEditing((bool) => !bool)}>Edit</button>
          <button onClick={() => deleteContact()}>Delete</button>
        </li>
      )}
    </div>
  );
}

export default Item;
