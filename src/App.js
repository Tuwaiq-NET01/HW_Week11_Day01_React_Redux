import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, contactAdded, editContact } from "./action";
import React, { useEffect, useState } from "react";
import Contact from "./Contact";

function App() {
  const counter = useSelector((state) => state.counter);
  const contactlist = useSelector((state) => state.contactlist);
  const [phone, setPhone] = useState({});
  const dispatch = useDispatch();

  const handelChange = (event) => {
    const att = event.target.name;
    const value = event.target.value;
    const updatedValue = { ...phone };
    updatedValue[att] = value;
    setPhone(updatedValue);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    dispatch(contactAdded(phone));
  };

  return (
    <div>
      <div>
        <div className="list-container">
          <header>
            <h1>Contact list</h1>
            <div className="form-container">
              <form onSubmit={handelSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handelChange}
                />
                <br />
                <input
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  onChange={handelChange}
                />

                <input className="submit-button" type="submit" value="Add" />
              </form>
            </div>
          </header>

          <main className="contact-list">
            {contactlist.map((item, index) => {
              return <Contact key={index} contact={item} index={index} />;
            })}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
