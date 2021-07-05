import  './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { contactAdded ,contactDeleted, contactEdit } from './action';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  const contactlist = useSelector(state => state.contactlist)
  const [phone, setPhone] = useState({})
  const [selected, setSelected] = useState(-1)
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
    dispatch(contactAdded(phone))
  }
  const handelDelete =(id)=>{
      dispatch(contactDeleted(id));
      };
      const handelEdit = (event) => {
        event.preventDefault()
        setSelected(-1)
        dispatch(contactEdit(selected,phone))
      }
  return (
    <div>
      <center>
    <h1>Contact List</h1>
    <ul>{contactlist.map((item, index) => {
        if(selected === index){
          return (
            <form onSubmit={handelEdit}>
            <label>
              Number
              </label><br></br>
              <input className ="btn btn-info" type="text" name="number" value={phone.number} onChange={handelChange} />
            <br />
            <label>
              Name
              <input  className ="btn btn-info" type="text" name="name" value={phone.name} onChange={handelChange} />
            </label>
            <div>
            <br />
              <input className ="btn btn-success" type="submit" value="Sumbit" />
            </div>
          </form>
          )
        }
        else{
        return (
          <div key={index}>
            <li className="item">Name {item.name} Number {item.number}</li>
            <button className ="btn btn-danger" onClick={() => dispatch(contactDeleted(index))}>Delete</button>
            <button className ="btn btn-warning" onClick={() => {setSelected(index); setPhone(item)}}>Edit</button>
          </div>
        )}
      })}</ul>
     <form onSubmit={handelSubmit}>
        <label>
          Number
          </label><br />
          <input className ="btn btn-info" type="text" name="number" onChange={handelChange} /><br />
        <br />
        <label>
          Name
          </label><br />
          <input  className ="btn btn-info"  type="text" name="name" onChange={handelChange} /> < br/>
        <div>
        <br />
          <input  className ="btn btn-primary" type="submit" value="Add to the list" />
        </div>
      </form>
      </center>
      </div>
  );
}

