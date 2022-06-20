import React, { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

export default function NewExpense(props) {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);

    // setShowingExpenseForm(false)
  };

  // Handling Show and Hide the Expenses form

  const [showingExpenseForm, setShowingExpenseForm] = useState(false);

  const showExpenseFormHandler = () => setShowingExpenseForm(true);

  const hideExpenseFormHandler = () => setShowingExpenseForm(false);

  return (
    <div className='new-expense'>
      {showingExpenseForm ? (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          hideExpenseForm={hideExpenseFormHandler}
        />
      ) : (
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      )}
    </div>
  );
}
