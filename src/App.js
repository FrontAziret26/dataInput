import './App.css';
import {NewExpense} from "./components/new-expense/NewExpense";
import {Expenses} from "./components/expenses/Expenses";

const expenses=[
    {
        title:"Iphone",
        price:"250$",
        date:new Date(),
    },


]

function App() {
    return (
        <div className="App">
            <NewExpense/>
            <Expenses expenses={expenses} />



        </div>
    );
}

export default App;
