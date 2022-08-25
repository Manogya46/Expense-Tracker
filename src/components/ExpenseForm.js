import React, { useState } from "react";
import "./newExpense.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseForm(props) {
  // const [title , setTitle] = useState('');
  // const [amount , setAmount] = useState('');
  // const [date , setDate] = useState('');

  //WE CAN MAKE USE OF ONE STATE AS WELL INSTEAD OF THREE.

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(userInput);

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <div>
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                onChange={titleChangeHandler}
                value={userInput.title}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                onChange={amountChangeHandler}
                value={userInput.amount}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2050-01-01"
                onChange={dateChangeHandler}
                value={userInput.date}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
    </div>
  );
}

export default ExpenseForm;
