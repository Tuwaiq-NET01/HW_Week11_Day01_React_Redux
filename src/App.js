import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  contactAdded,
  toggle,
  contactDelete,
  contactEdit,
} from "./action";
import { useState } from "react";

function App() {
  const counter = useSelector((state) => state.counter);
  const contactlist = useSelector((state) => state.contactlist);
  const isOn = useSelector((state) => state.isOn);

  const [phone, setPhone] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [editingitem, setEditingitem] = useState({});
  const dispatch = useDispatch();

  const handelChange = (event) => {
    const att = event.target.name;
    const value = event.target.value;
    const updatedValue = { ...phone };
    updatedValue[att] = value;
    console.log("updatedValue", updatedValue);
    setPhone(updatedValue);
  };

  const handelChangeEdit = (event) => {
    const att = event.target.name;
    const value = event.target.value;
    const updatedValue = { ...editingitem };
    updatedValue[att] = value;
    setEditingitem(updatedValue);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    dispatch(contactAdded(phone));
  };
  const handelSubmitEdit = (event) => {
    event.preventDefault();
    dispatch(contactEdit(editingitem));
    setIsEdit(false);
    setEditingitem({});
  };
  return (
    <div>
      <h1>counter {counter}</h1>

      {isOn ? <h1>True</h1> : <h1>False</h1>}
      <button onClick={() => dispatch(toggle())}>Toggle</button>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <ul>
        {contactlist.map((item, index) => {
          return (
            <div key={index}>
              <li>
                {item.id}. name {item.name} number {item.number}
                <button onClick={() => dispatch(contactDelete(item))}>
                  Delete
                </button>
                <button
                  onClick={() => {
                    setIsEdit((e) => !e);
                    setEditingitem(item);
                  }}
                >
                  Edit
                </button>
              </li>
              {isEdit && editingitem.id === item.id ? (
                <form onSubmit={handelSubmitEdit}>
                  <label>
                    <input
                      type="text"
                      name="number"
                      value={editingitem.number}
                      onChange={handelChangeEdit}
                    />
                    number
                  </label>
                  <br />
                  <label>
                    <input
                      type="text"
                      name="name"
                      value={editingitem.name}
                      onChange={handelChangeEdit}
                    />
                    name
                  </label>
                  <br />
                  <div>
                    <input type="submit" value="Edit" />
                  </div>
                </form>
              ) : null}
            </div>
          );
        })}
      </ul>

      <form onSubmit={handelSubmit}>
        <label>
          <input type="text" name="number" onChange={handelChange} />
          number
        </label>
        <br />
        <label>
          <input type="text" name="name" onChange={handelChange} />
          name
        </label>
        <br />
        <div>
          <input type="submit" value="Add to the list" />
        </div>
      </form>
    </div>
  );
}

export default App;
