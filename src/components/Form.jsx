import React, { useEffect, useState } from 'react'

const Form = ({ addTransaction, edit, updateTransaction }) => {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (edit.isEdit === false) {
      addTransaction(text, parseInt(amount))
      // console.log(text , amount ,)
     } 
    else {
      updateTransaction({
       id: edit.transaction.id ,
       amount: parseInt(amount),
       text: text, }
      )
    }
    setText("")
    setAmount("")

  }

  useEffect(() => {

    setAmount(edit.transaction.amount)
    setText(edit.transaction.text)

  }, [edit])

  return (
    <div>
      <form className="my-3" onSubmit={ handleSubmit}  >
        <input
          type="text"
          placeholder="Enter Transaction"
          className="form-control rounded-0 my-2"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          className="form-control rounded-0 my-2"

          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button className="btn btn-success w-100 rounded-0">
          Save Transaction
        </button>
      </form>
    </div>
  )
}

export default Form
