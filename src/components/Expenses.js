import ExpenseItem from "./ExpenseItem";
import "./expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    props.onFilterChange(selectedYear);
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.expense.filter((item) => {
    const d = new Date(item.date)
    console.log(d.getFullYear());
    return d.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpenses} />

        {filteredExpenses.length === 0 ? (
          <h2>No expenses found</h2>
        ) : (
          filteredExpenses.map((item) => {
            console.log(item.amount);
            return (
              <ExpenseItem
                key={item.id}
                title={item.title}
                date={item.date}
                price={item.amount}
              />
            );
          })
        )}

        {/* <ExpenseItem
          title={props.expense[0].title}
          date={props.expense[0].date}
          price={props.expense[0].price}
        />
        <ExpenseItem
          title={props.expense[1].title}
          date={props.expense[1].date}
          price={props.expense[1].price}
        />
        <ExpenseItem
          title={props.expense[2].title}
          date={props.expense[2].date}
          price={props.expense[2].price}
        /> */}
      </div>
    </div>
  );
}

export default Expenses;
