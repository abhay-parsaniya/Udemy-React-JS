import { useState } from "react";
import NewComponentExpense from "./components/Expenses/NewComponentExpense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  // Dummy Data
  
  const Dummy_Data = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  
  const [expenses, setExpenses] = useState(Dummy_Data)

  const addExpenseHandler = (expense) => {
    // console.log(expense);
    setExpenses(prevExpense => {
      return [expense, ...prevExpense];
    })
  };

  return (

    <div className="App">

        {/* This Component is Contain All Expenses */}
        
        <NewExpense onAddExpense={addExpenseHandler} />
        <NewComponentExpense allexpenses={expenses} />
    </div>
  );
};

export default App;
