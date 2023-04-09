import React, {useState} from 'react';
import {ExpenseForm} from "../expense-form/ExpenseForm";
import {Button} from "../UI/button/Button";
import './NewExpense.css'

export const NewExpense = () => {
  const [showForm,setShowForm]=  useState(false)

 const showExpenseForm=()=>{

setShowForm((prevState)=>{
    return !prevState
})

  }
     console.log("YYYOOO",showForm)

    return (
        <div className="block_add">
            <div className="div_add">
                {showForm? (
                    <ExpenseForm onShowForm={showExpenseForm}/>
                ) :(
                    <Button title="Добавить новый расходы" onClick={showExpenseForm} />
                )}
            </div>

        </div>
    );
};

