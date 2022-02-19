/**
 * Expenses block component -> receives an expense list and renders each expense
 */
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const expensesList = props.items.map((element) => (
    <ExpenseItem
      title={element.title}
      amount={element.amount}
      date={element.date}
    />
  ));
  return <Card className="expenses">{expensesList}</Card>;
}
export default Expenses;
