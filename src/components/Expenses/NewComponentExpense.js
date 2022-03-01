import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './NewComponentExpense.css';

const NewComponentExpense = (props) => {

    // This is Card Component which rendering each Expense item Component

    return(
        <Card className="expenses">
            <ExpenseItem title={props.allexpenses[0].title} amount={props.allexpenses[0].amount} date={props.allexpenses[0].date} />
            <ExpenseItem title={props.allexpenses[1].title} amount={props.allexpenses[1].amount} date={props.allexpenses[1].date} />
            <ExpenseItem title={props.allexpenses[2].title} amount={props.allexpenses[2].amount} date={props.allexpenses[2].date} />
            <ExpenseItem title={props.allexpenses[3].title} amount={props.allexpenses[3].amount} date={props.allexpenses[3].date} />
        </Card>
    );
};

export default NewComponentExpense;