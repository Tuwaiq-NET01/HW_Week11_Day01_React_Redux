import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { contactEdit, contactDelete } from './action';

export default function EditDeleteList(props) {
    const [editItem, setEditItem] = useState(() => props.item)
    const [isEditing, setIsEditing] = useState(() => false)

    const dispatch = useDispatch();

    const editContact = (e) => {
        e.preventDefault()
        setIsEditing((val) => !val)

        dispatch(contactEdit({...editItem, index:props.index}))
    }

    const deleteContact = () => {
        dispatch(contactDelete({...editItem, index: props.index}))
    }

    return (
        <div>
            {isEditing ?
                (<form onSubmit={(e) => editContact(e)}>
                    <label>Number:</label>
                    <input value={editItem.number} onChange={(e) => setEditItem({ ...editItem, number: e.target.value })} />
                    <label>Name:</label>
                    <input value={editItem.name} onChange={(e) => setEditItem({ ...editItem, name: e.target.value })} />
                    <button type="submit">Save</button>
                </form>
                )
                :
                (
                    <li>name {props.item.name} number {props.item.number}
                        <button onClick={() => setIsEditing((val) => !val)}>Edit</button>
                        <button onClick={() => deleteContact()}>Delete</button>
                    </li>
                )
            }


        </div>
    )
}
