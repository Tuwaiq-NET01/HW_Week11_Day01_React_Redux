import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement, contactAdd,toggle } from './action'
import EditDeleteList from './EditDeleteList'

export default function App() {
 // const counter = useSelector(state => state.counter)
 // const isLogged = useSelector(state => state.isLogged)
  //const isOn = useSelector(state => state.isOn)

  const contactList = useSelector(state => state.contactList)
  const [phone,setPhone]=useState({})

  const handelChange = (event)=>{
    const att=event.target.name
    const value = event.target.value
    const updateValue ={...phone}
    updateValue[att]=value
    console.log("updated value",updateValue)
    setPhone(updateValue)
  }
  const dispatch = useDispatch()


  const handelSubmit = (event)=>{
    event.preventDefault()
    dispatch(contactAdd(phone))
  }

  
  // const handelEdit = (event)=>{
  //   event.preventDefault()
    
  // }


  return (
    <div>
      {/* <h1> Counter  {counter} 🎮🕹</h1>
      <button onClick={()=> dispatch(increment(100))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      {isOn? <h1>OhYeah</h1>:<h1>Oh Noooo!!!</h1>}  
      <button onClick={()=> dispatch(toggle())}>Click me I Dare You !!</button> */}



      <ul> {contactList.map((item,index)=>{
        return(
          <EditDeleteList key={index} index={index} item={item} />
          )})
      }
      </ul>

      <form onSubmit={handelSubmit}>
        <label>
          <input type="text" name ="number" onChange={handelChange}/>
          number
          </label>
          <br/>
          <label>
          <input type="text" name ="name" onChange={handelChange}/>
          name
          </label>
          <br/>
          <div>
          <input type="submit" value="Add to the list" />
        </div>
      </form>


      {/* {isLogged? <h1>Welcome</h1> : null} */}

    </div>
  )
}
