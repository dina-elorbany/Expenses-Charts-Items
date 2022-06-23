import React, { useState } from 'react';

import './Expenses.css';
// import ExpenseItem from './ExpenseItem';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpeneseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => setFilteredYear(selectedYear);

  // MY_SOLUTION:

  /*
  const filteredExpensesList = props.items
    .map(expenseItem => expenseItem)
    .filter(
      filteredItem =>
        filteredItem.date.toString().slice(11, 15) === filteredYear
    );
  */

  const filteredExpensesList = props.items.filter(
    expense => expense.date.getFullYear().toString() === filteredYear
  );

  console.log(filteredExpensesList);

  /*
  let expensesContent = <p>No Expenses Found!</p>;

  if (filteredExpensesList.length > 0) {
    expensesContent = filteredExpensesList.map(expense => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ));
  }
  */

  /*
  const expensesContent =
    filteredExpensesList.length === 0 ? (
      <p>No Expenses Found!</p>
    ) : (
      filteredExpensesList.map(expense => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))
    );
    */

  /*
    { {props.items.map(expense => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))} }

      {
        {filteredExpensesList.map(expense => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))} }

        {{expensesContent}}
      { <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}
      />
      <ExpenseItem
        date={props.items[3].date}
        title={props.items[3].title}
        amount={props.items[3].amount}
      /> }
 */

  return (
    <li className='expenses-list'>
      <Card className='expenses'>
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpensesList} />

        <ExpeneseList expensesList={filteredExpensesList} />
      </Card>
    </li>
  );
};

export default Expenses;
