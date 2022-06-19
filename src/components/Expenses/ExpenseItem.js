import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = props => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   // console.log('clicked');
  //   setTitle('Updated!');
  //   console.log(title);
  // };
  return (
    // const expenseDate = new Date(2020, 3, 22);
    // console.log(expenseDate);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;

    // console.log(props);

    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props['title']}</h2>
        <p className='expense-item__price'>${props.amount}</p>
        {/* <button onClick={clickHandler}>button</button> */}
      </div>
    </Card>
  );
};

export default ExpenseItem;
