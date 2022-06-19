import React from 'react';
import './NewExpense.css';
import NewExpeseForm from './NewExpeseForm';

export default function NewExpense(props) {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <NewExpeseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
