import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  addRecord,
  editRecord,
  deleteRecord,
} from './actions'

const App = () => {
  const counter = useSelector((state) => state.counter)
  const list = useSelector((state) => state.contactList)
  const [contact, setContact] = useState(() => '')
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <div>
        <h2>Contact List</h2>
        <div>
          <input
            type="text"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value)
            }}
          />
          <button
            onClick={() => {
              dispatch(addRecord(contact))
              setContact('')
            }}
          >
            Add
          </button>
          <br />
          <br />
        </div>
        {list &&
          list.map((contact, index) => {
            return (
              <div key={index}>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => {
                    dispatch(editRecord(contact, e.target.value))
                  }}
                />
                <button onClick={() => dispatch(deleteRecord(contact))}>
                  Del
                </button>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default App
