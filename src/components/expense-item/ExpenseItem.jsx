import React from 'react';
import '../expense-item/ExpenseItem.css'
export const ExpenseItem = (props) => {
 const {date,title,price}=props
    return (
        <div className="backend"  >
            <div className="backend_title">
            <span className="data">{date.toString()}</span>
            <p className="title">{title}</p>
            <span className="price">{price}</span>
            </div>
        </div>
    );
};

