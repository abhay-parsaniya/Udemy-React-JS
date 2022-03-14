import Card from '../UI/Card';
import './NewComponentExpense.css';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

const NewComponentExpense = (props) => {

    // This is Card Component which rendering each Expense item Component

    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.allexpenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default NewComponentExpense;