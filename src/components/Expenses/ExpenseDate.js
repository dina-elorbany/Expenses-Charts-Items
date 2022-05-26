import './ExpenseDate.css';

export default function ExpenseDate(props) {
  console.log(props);

  const month = props.date.toLocaleString('en-us', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-us', { day: 'numeric' });

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}
