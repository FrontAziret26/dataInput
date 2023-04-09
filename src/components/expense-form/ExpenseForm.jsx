import React from 'react';
import './ExpenseForm.css'
import {FormInput} from "../UI/forminput/FormInput";
import {Button} from "../UI/button/Button";

export const ExpenseForm = (props) => {
    const cancelHandler=()=>{

        props.onShowForm()
    }
    return (
        <div className="block_sigIn">
            <div className="block">

                    <FormInput label="Заголовок" type="text" placeholder="Заголовок"/>
                    <FormInput label="Количество" type="number"/>
                    <FormInput label="Дата" type="date" placeholder="дд.мм.гггг"/>

                <div className="btns">
                    <Button title="Отмена" onClick={cancelHandler}/>
                    <Button title="Сохранить расходы "/>

                </div>
            </div>


        </div>
    );
};


