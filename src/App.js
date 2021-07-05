import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, contactAdded, toggle , editItem,deleteItem} from './action';
import { useState } from 'react'

function App() {
  const counter = useSelector(state => state.counter)
  const contactlist = useSelector(state => state.contactlist)

  const isOn  = useSelector(state=>state.isOn)
  const [phone, setPhone] = useState({})

  const [edit,setEdit] = useState({})
  const [isEdit,setIsEdit]= useState(false)
  const [showForm, setShowForm]= useState(false)

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

  const handelEdit = (event)=>{
    const att = event.target.name
    const value = event.target.value
    const updatedValue = { ...edit}
    updatedValue[att] = value
    console.log("updatedValue", updatedValue);
    setEdit(updatedValue)
  }

  const EditSubmit = (event) => {
    event.preventDefault()
    dispatch(editItem(edit))
  }
  return (
    <div >
      <h1>counter {counter}</h1>
      
      {isOn? <h1>True</h1>:<h1>False</h1>}

      <button onClick={() => dispatch(toggle())}>toggle the value</button>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <ul>{contactlist.map((item, index) => {
        return (
          <div key={index}>
            <li>
              name {item.name} number {item.number}
              <button onClick={()=>dispatch(deleteItem())}>delete</button>
              <button onClick={()=>{ 
                setIsEdit((event)=>!event)
                setEdit(item)
                setShowForm((event)=>!event)
              }
                
                }>edit</button>
            </li>
            {showForm && isEdit && editItem.id == item.id ? 
              
                <div>
                
                  <form onSubmit={EditSubmit}>
                  <label>
                    <input type="text" name="number" onChange={handelEdit} />
                  number</label>
                    <br />
                  <label>
                    <input type="text" name="name" onChange={handelEdit} />
                  name</label>
                    <br />
                  <div>
                    <input type="submit" value="Edit"/>
                  </div>
                </form> 
                  
            </div>
            :null}
            
            
              




          </div>
        )
      })}</ul>



      <form onSubmit={handelSubmit}>
        <label>
          <input type="text" name="number" onChange={handelChange} />
                number</label>
        <br />
        <label>
          <input type="text" name="name" onChange={handelChange} />
                name</label>
        <br />
        <div>
          <input type="submit" value="Add to the list" />
        </div>
      </form>

    </div>
  );
}

export default App;
