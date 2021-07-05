import React from 'react'

export default function Form(props) {
  //const name = ()=> props.NameValue ? props.NameValue: null
  return (
    <div >

      <form onSubmit={props.handelSubmit} className="m-auto" style={{ width: 500 + 'px' }}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label" >Number </label>
          <input name="number" placeholder={props.NumberValue} onChange={props.handelChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Name </label>
          <input type="text" name="name" placeholder={props.NameValue} onChange={props.handelChange} type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-info">Submit</button>
      </form>
    </div>
  )
}
