import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = props => (
  // const expenseDate = new Date(2020, 3, 22);
  // console.log(expenseDate);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;

  // console.log(props);

  <Card className='expense-item'>
    <ExpenseDate date={props.date} />
    <div className='expense-item__description'>
      <h2>{props.title}</h2>
      <p className='expense-item__price'>${props.amount}</p>
    </div>
  </Card>
);

export default ExpenseItem;
