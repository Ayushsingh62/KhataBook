import React from 'react'
import Listitem from './Listitem'

const Listgroup = ({ transactions, DeleteTransaction, editTransaction }) => {
  // console.log(transactions)
  return (
    <div>
      <ul className="my-2 list-group">
        {transactions.map((transaction) =>
          <Listitem key={transaction.id} transaction={transaction} DeleteTransaction={DeleteTransaction} editTransaction={editTransaction} />)}

      </ul>

    </div>
  )
}

export default Listgroup
