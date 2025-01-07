
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Listgroup from './components/Listgroup'

const App = () => {
const [edit , setEdit]=useState({transaction:{}, isEdit:false})
const [transactions , setTransaction]=useState([

//   id:1,
//   text:"Salary",
//   amount :100000,
  
// },
//  { id:2,
//   text:"Rent",
//   amount :-25000,}
//   ,

//   { id:3,
//     text:"Grocery",
//     amount :-5000,}
//     ,
//     { id:4,
//       text:"Bonus",
//       amount :1000,}
      

])

const addTransaction =(text , amount)=>{
setTransaction([{id:crypto.randomUUID() , text:text , amount:amount }, ...transactions])

console.log(text , amount)
}

const DeleteTransaction =(id)=>{
setTransaction(transactions.filter((transaction)=>transaction.id !== id))
// console.log(id)
}

const editTransaction =(transaction)=>{
setEdit({isEdit:true , transaction:transaction})
console.log(transaction,"true")
}

const updateTransaction=(updatedTransaction)=>{
 setTransaction(  transactions.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction
      )
    
    
    )

      setEdit({isEdit:false , transaction:{}})



}

  return (
    <>
<Navbar/>

<Dashboard transactions={transactions}/>
   <Form addTransaction={addTransaction} edit ={edit} updateTransaction={updateTransaction} />
    <Listgroup transactions={transactions} DeleteTransaction={DeleteTransaction} editTransaction={editTransaction} />
    </> 
  )
}

export default App
