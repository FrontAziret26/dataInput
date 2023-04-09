import React from 'react';
import {ExpenseItem} from "../expense-item/ExpenseItem";
import './Expenses.css'
export const Expenses = ({expenses}) => {
    return (
     <div >
         <ul>

             {expenses.map((elem)=>{
                 return (
                     <ExpenseItem title={elem.title}
                                  price={elem.price}
                                  date={elem.date}
                     />

                 )
             })}
         </ul>
     </div>
    );
};

