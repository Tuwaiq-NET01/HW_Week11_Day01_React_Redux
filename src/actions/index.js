export const increment = (amount) => {
  return {
    type: 'INCREMENT',
    payload: amount,
  }
}
export const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

export const addRecord = (record) => {
  return {
    type: 'ADD',
    payload: record,
  }
}

export const editRecord = (record, newRecord) => {
  return {
    type: 'EDIT',
    payload: {
      record,
      newRecord,
    },
  }
}

export const deleteRecord = (record) => {
  return {
    type: 'DELETE',
    payload: record,
  }
}
