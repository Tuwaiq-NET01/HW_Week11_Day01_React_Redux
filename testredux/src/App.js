import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, ContactAddded, ContactDeleted, ContactEdited } from './action';
import { useState } from 'react'

export default function App() {
  const counter = useSelector(state => state.counter)
  const ContactList = useSelector(state => state.ContactList)
  const [phone, setPhone] = useState({})
  const [i, setI] = useState(-1)
  const dispatch = useDispatch();
  const handelChange = (event) => {
    const att = event.target.name
    const value = event.target.value
    const updatedValue = { ...phone }
    updatedValue[att] = value
    console.log("updatedValue", updatedValue);
    setPhone(updatedValue)
  }

  const handelSubmit = (event) => {
    event.preventDefault()
    dispatch(ContactAddded(phone))
  }

  const handelEdit = (event) => {
    event.preventDefault()
    setI(-1)
    dispatch(ContactEdited(i,phone))
  }
 
  return (
    <div className="contact" >
    <h1>Counter {counter}</h1>
    <button onClick={()=> dispatch(increment(2))}>+</button>
    <button onClick={()=> dispatch(decrement())}>-</button>
    
    {/* {isLogged ? <h1>Welcome</h1> : null} */}
    <ul>{ContactList.map((item, index) => {
        if(i === index){
          return (
            <form onSubmit={handelEdit}>
            <label>Number
            <input type="text" name="number" value={phone.number} onChange={handelChange} />
            
            </label>
            <br />
            <label>Name 
              <input type="text" name="name" value={phone.name} onChange={handelChange} />
            </label>       
            <div>
            <br />
              <input type="submit" value="Sumbit" />
            </div>
          </form>
          )
        }
        else{
          return (
            <div key={index}>
              <li>Name: {item.name} Number: {item.number}</li>
              <button onClick={(e) =>dispatch(ContactDeleted(item))} className="btn btn-danger"> Remove </button>  
              <button onClick={(e) => {setI(index); setPhone(item) }}>Edit</button>
            </div>
          )}
        })}</ul>   

      <form onSubmit={handelSubmit}>
        <label>Number
          <input type="text" name="number" onChange={handelChange} /> </label>
        <br />
        <label>Name
          <input type="text" name="name" onChange={handelChange} /> </label>
        <br />
        <div>
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>
 
  );
}
