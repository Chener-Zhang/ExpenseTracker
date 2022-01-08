import "./styles.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import { ListProvider } from "./AppContext";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <ListProvider>
      <div className="container">
        <h1 className="mt-3">My Budget</h1>

        <div className="row">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <ExpenseList />
        <AddExpense />
      </div>
    </ListProvider>
  );
}
