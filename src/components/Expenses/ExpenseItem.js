import React, {useState} from 'react'
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    // use of useState hook

    const [title, setTitle] = useState(props.title);

    const update = () => {
        setTitle("updated");
    };

    // This is for rendering each Expense Item using card and passing data via props

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={update}>Click</button>
        </Card>
    );
};

export default ExpenseItem;