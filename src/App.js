import { useSelector, useDispatch } from 'react-redux'
//import { increment, decrement } from './action';
import { contactAdded ,contactDeleted, contactEdit } from './action';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const counter = useSelector(state => state.counter)
  const contactlist = useSelector(state => state.contactlist)
  const [phone, setPhone] = useState({})
  const [Choice, setChoice] = useState(-1)
  const dispatch = useDispatch();
  const handelChange = (event) => {
    const att = event.target.name
    const value = event.target.value
    const updatedValue = { ...phone }
    updatedValue[att] = value
    console.log("updatedValue", updatedValue);
    setPhone(updatedValue)

  }
  const handelEdit = (event) => {
    event.preventDefault()
    setChoice(-1)
    dispatch(contactEdit(Choice,phone))
  }

  const handelSubmit = (event) => {
    event.preventDefault()
    dispatch(contactAdded(phone))

    
  }
  
  return (
    <div >
      {/* <h1>counter {counter}</h1> */}

      {/* <button onClick={() => dispatch(increment(2))}>+</button> */}
      {/* <button onClick={() => dispatch(decrement())}>-</button> */}

      <ul>{contactlist.map((item, index) => {
        if(Choice === index){
          return (
          <form onSubmit={handelEdit}>
            <label>
              Id: </label><br></br>

              <input className ="btn btn-info" type="text" name="number" value={phone.number} onChange={handelChange} />
            <br />
            <label>
              Name: 
              <input  className ="btn btn-info" type="text" name="name" value={phone.name} onChange={handelChange} />
            </label>
            <div>
            <br />
              <input className ="btn btn-success" type="submit" value="Update" />
            </div>
          </form>
          )
        }
        else{
        return (
          <div key={index}>
            <li> number: {item.number} Name: {item.name}</li>
            <button className ="btn btn-danger" onClick={() => dispatch(contactDeleted(index))}>Delete</button>
            <button className ="btn btn-danger" onClick={() => {setChoice(index); setPhone(item)}}>Edit</button>
          </div>
        )}
      })}
      </ul>

      <form onSubmit={handelSubmit}>
        <label>
        Number<input type="text" name="number" onChange={handelChange} />
                </label>
        <br />
        <label>
        Name <input type="text" name="name" onChange={handelChange} />
                </label>
        <br />
        <div>
          <input className ="btn btn-success" type="submit" value="Add" />
        </div>
      </form>

    </div>
  );
    } export default App;
