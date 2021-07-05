import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, editContact } from "./action";

const Contact = ({ contact, index, handleEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const [contactInfo, setContactInfo] = useState({});

  const handelChange = (event) => {
    const att = event.target.name;
    const value = event.target.value;
    const updatedValue = { ...contactInfo };
    updatedValue[att] = value;
    setContactInfo(updatedValue);
  };

  const handleDelete = () => {
    console.log(index);
    dispatch(deleteContact(index));
  };

  const handleEditSubmit = (e) => {
    //dispatch(editContact(index, contactInfo));
    handleEdit(index, contactInfo);
    setEditMode(false);
  };

  return (
    <article className="contact">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="profile-icon"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          clipRule="evenodd"
        />
      </svg>
      <div className="contact-info">
        {!editMode ? (
          <div>
            <h4>{contact.name}</h4>
            <h5>{contact.number}</h5>
          </div>
        ) : (
          <div>
            <input
              name="number"
              placeholder={contact.name}
              onChange={handelChange}
            />
            <br />
            <input
              name="name"
              placeholder={contact.number}
              onChange={handelChange}
            />
          </div>
        )}
      </div>
      <div className="contact-actions">
        {!editMode ? (
          <>
            <button className="delete-button" onClick={handleDelete}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="edit-button" onClick={() => setEditMode(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </>
        ) : (
          <div className="edit-actions">
            <button onClick={handleEditSubmit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default Contact;
