import './App.css';
import React , { useState } from 'react'
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

function App() {

  
  const dummyExpense = [
    {
      id:'e1',
      date: new Date(2022,7,17),
      title:'Car insurance',
      amount:200
    },
    {
      id:'e2',
      date: new Date(2022,10,7),
      title:'Grocery',
      amount:550
    },
    {
      id:'e3',
      date: new Date(2022,3,7),
      title:'Medicines',
      amount:29
    }
  ]

  const [expenses , setExpenses] = useState(dummyExpense);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  const filterChange = (selectedYear) => {
    console.log(selectedYear);
  }

  
  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses expense={expenses} onFilterChange={filterChange} />
    </div>
  );
}

export default App;
