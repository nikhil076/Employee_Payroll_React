import React from 'react';
import './home.css';
import logo from "../../assets/images/logo.png";
import addIcon from "../../assets/icons/add-24px.svg";
import EmployeeData from "../Employee-Data/EmployeeData";

class Home extends React.Component {
    render() {
        return (
            <div>
                <header className="header-content header">
                    <div className="logo-content">
                        <img src={logo} alt="Employee Payroll"/>
                        <div>
                            <span className="emp-text">EMPLOYEE</span><br/>
                            <span className="emp-text emp-payroll">PAYROLL</span>
                        </div>
                    </div>
                </header>
                <div className="main-content">
                    <div className="header-content">
                        <div className="emp-detail-text">
                            Employee Details
                        </div>
                            <img src={addIcon} alt="Add Button"/><div>Add User</div>
                    </div>
                    <div className="table-main">
                        <EmployeeData/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;