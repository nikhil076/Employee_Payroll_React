import logo from './logo.svg';
import './App.css';
import PayrollForm from "./Components/payroll-form";
import Home from "./Components/Home/Home";
import EmployeeData from "./Components/Employee-Data/EmployeeData";

function App() {
  return (
    <div className="App">
      {/*<PayrollForm/>*/}
        <EmployeeData/>
      {/*  <Home/>*/}
    </div>
  );
}

export default App;
