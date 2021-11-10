import React from "react";
import profile1 from '../assets/profile-images/Ellipse -3.png';
import profile2 from '../assets/profile-images/Ellipse -1.png';
import profile3 from '../assets/profile-images/Ellipse -8.png';
import profile4 from '../assets/profile-images/Ellipse -7.png';
import './payroll-form.css'
import {addEmployee} from "../Services/service";


function PayrollForm () {
    const [firstName,setFirstName] = React.useState("")
    const [gender,setGender] = React.useState("")
    const [profilePic, setProfilePic] = React.useState("")
    const [departments,setDepartments] = React.useState([])
    const [departmentHR,setDepartmentHR] = React.useState(true)
    const [departmentSales,setDepartmentSales] = React.useState(true)
    const [departmentFinance,setDepartmentFinance] = React.useState(true)
    const [departmentEngineer,setDepartmentEngineer] = React.useState(true)
    const [departmentOthers,setDepartmentOthers] = React.useState(true)
    const [salary,setSalary] = React.useState("")
    const [date,setDate] = React.useState("")
    const [notes,setNotes] = React.useState("")

    const submit = (e) => {
        e.preventDefault()
        // console.log(firstName)
        // console.log(departments)
        // console.log(notes)
        // console.log(date)
        // console.log(gender)
        // console.log(salary)
        // console.log(profilePic)
        let obj = {"name": firstName ,"gender": gender,"department":departments, "salary": parseInt(salary), "startDate": date,"note": notes,"profilePic":profilePic}
        console.log(obj)
        addEmployee(obj).then((response) => {console.log(response)} ).catch((error) => {console.log(error)})
    }
    const takeProfile = (event) => {
        setProfilePic(event.target.value)
        console.log(event.target.value)
    }

    const takeGender = (event) => {
        setGender(event.target.value)
    }

    const takeFirstName= (event) => {
      setFirstName(event.target.value)
    }

    const takeSalary = (event) => {
      setSalary(event.target.value)
    }
    const takeDate = (event) => {
      // setDate({...date,[event.target.value]: event.target.value})
      //   date = event.target.value + " "
        setDate(date => date + event.target.value + " ")
    }
    const takeNotes = (event) => {
      setNotes(event.target.value)
    }

    const selectDepartment = (departemnt) => {
        if (departemnt == "HR"){
            setDepartmentHR(!departmentHR)
            console.log(departmentHR)
        }
        if (departemnt == "sales"){
            setDepartmentSales(!departmentSales)
            console.log(departmentSales)
        }
        if (departemnt == "finance"){
            setDepartmentFinance(!departmentFinance)
            console.log(departmentFinance)
        }
        if (departemnt == "engineer"){
            setDepartmentEngineer(!departmentEngineer)
            console.log(departmentEngineer)
        }
        if (departemnt == "Others"){
            setDepartmentOthers(!departmentOthers)
            console.log(departmentOthers)
        }
        if (departmentHR){
            let findArray = departments.filter(x => x == departemnt)
            if (findArray.length == 0){
                setDepartments([...departments,departemnt])
            }
        }
        else{
            console.log("remove")
            let newArray = departments.filter(function(item) {
                return item !== departemnt
            })
            setDepartments(newArray)
        }
        if (departmentSales){
            let findArray = departments.filter(x => x == departemnt)
            if (findArray.length == 0){
                setDepartments([...departments,departemnt])
            }
        }
        else{
            console.log("remove")
            let newArray = departments.filter(function(item) {
                return item !== departemnt
            })
            setDepartments(newArray)
        }
        if (departmentEngineer){
            let findArray = departments.filter(x => x == departemnt)
            if (findArray.length == 0){
                setDepartments([...departments,departemnt])
            }
        }
        else{
            console.log("remove")
            let newArray = departments.filter(function(item) {
                return item !== departemnt
            })
            setDepartments(newArray)
        }
        if (departmentFinance){
            let findArray = departments.filter(x => x == departemnt)
            if (findArray.length == 0){
                setDepartments([...departments,departemnt])
            }
        }
        else{
            console.log("remove")
            let newArray = departments.filter(function(item) {
                return item !== departemnt
            })
            setDepartments(newArray)
        }
        if (departmentOthers){
            let findArray = departments.filter(x => x == departemnt)
            if (findArray.length == 0){
                setDepartments([...departments,departemnt])
            }
        }
        else{
            console.log("remove")
            let newArray = departments.filter(function(item) {
                return item !== departemnt
            })
            setDepartments(newArray)
        }
    }

    // const takeDepartment = (event) => {
    //     if (departmentHR){
    //         let findArray = departments.filter(x => x == departemnt)
    //         if (findArray.length == 0){
    //             setDepartment([...departments,departemnt])
    //         }
    //     }
    //     else{
    //         console.log("remove")
    //         let newArray = departments.filter(function(item) {
    //             return item !== departemnt
    //         })
    //         setDepartment(newArray)
    //     }
    //
    //     if (departmentSales){
    //         let findArray = departments.filter(x => x == departemnt)
    //         if (findArray.length == 0){
    //             setDepartment([...departments,departemnt])
    //         }
    //     }
    //     else{
    //         console.log("remove")
    //         let newArray = departments.filter(function(item) {
    //             return item !== event.target.value
    //         })
    //         setDepartment(newArray)
    //     }
    //     if (departmentEngineer){
    //         let findArray = departments.filter(x => x == departemnt)
    //         if (findArray.length == 0){
    //             setDepartment([...departments,departemnt])
    //         }
    //     }
    //     else{
    //         console.log("remove")
    //         let newArray = departments.filter(function(item) {
    //             return item !== departemnt
    //         })
    //         setDepartment(newArray)
    //     }
    //     if (departmentFinance){
    //         let findArray = departments.filter(x => x == departemnt)
    //         if (findArray.length == 0){
    //             setDepartment([...departments,departemnt])
    //         }
    //     }
    //     else{
    //         console.log("remove")
    //         let newArray = departments.filter(function(item) {
    //             return item !== departemnt
    //         })
    //         setDepartment(newArray)
    //     }
    //     if (departmentOthers){
    //         let findArray = departments.filter(x => x == departemnt)
    //         if (findArray.length == 0){
    //             setDepartment([...departments,departemnt])
    //         }
    //     }
    //     else{
    //         console.log("remove")
    //         let newArray = departments.filter(function(item) {
    //             return item !== departemnt
    //         })
    //         setDepartment(newArray)
    //     }
    // }

    return (


        <div>
            <header className="header-content header">
                <div className="logo-content">
                        <div>
                            <span className="emp-text">EMPLOYEE</span><br />
                            <span className="emp-text emp-payroll">PAYROLL</span>
                        </div>
                </div>
            </header>

            <div className="form-content">
                <form action="#" className="form">
                    <div className="form-head">Employee Payroll Form</div>
                    <div className="row-content">
                        <label className="label text" htmlFor="name">Name</label>
                        <input className="input" type="text" name="name" id="name" placeholder="Your name .." required onChange={takeFirstName} />
                    </div>
                    <div className="row-content ">
                        <label className="label text" htmlFor="profile">Profile image</label>
                        <div className="profile-radio-content">
                            <label>
                                <input type="radio" name="profile" id="profile1"
                                       value="../assets/profile-images/profilePic.png" required onChange={takeProfile}/>
                                <img className="profile" src={profile1} alt="" />
                            </label>
                            <label>
                                <input type="radio" name="profile" id="profile2"
                                       value="../assets/profile-images/profilePic.png" required onChange={takeProfile}/>
                                <img className="profile" src={profile2} alt="" />
                            </label>
                            <label>
                                <input type="radio" name="profile" id="profile3"
                                       value="../assets/profile-images/profilePic.png" required onChange={takeProfile}/>
                                <img className="profile" src={profile3} alt="" />
                            </label>
                            <label>
                                <input type="radio" name="profile" id="profile4"
                                       value="../assets/profile-images/profilePic.png" required onChange={takeProfile}/>
                                <img className="profile" src={profile4} alt="" />
                            </label>
                        </div>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="gender">Gender</label>
                        <div>
                            <input type="radio" name="gender" id="male" value="male" onChange={takeGender}/>
                                <label className="text" htmlFor="male">Male</label>
                                <input type="radio" name="gender" id="female" value="female" onChange={takeGender}/>
                                    <label className="text" htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="department">Department</label>
                        <div>
                            <input className="checkbox" type="checkbox" name="hr" id="hr" value="HR" onChange={() => selectDepartment("HR")}/>
                                <label className="text" htmlFor="hr">HR</label>
                                <input className="checkbox" type="checkbox" name="sales" id="sales" value="Sales"  onChange={() => selectDepartment("sales")}/>
                                    <label className="text" htmlFor="sales">Sales</label>
                                    <input className="checkbox" type="checkbox" name="finance" id="finance"
                                           value="Finance" onChange={() => selectDepartment("finance")}/>
                                        <label className="text" htmlFor="finance">Finance</label>
                                        <input className="checkbox" type="checkbox" name="engineer" id="engineer"
                                               value="Engineer" onChange={() => selectDepartment("engineer")}/>
                                            <label className="text" htmlFor="engineer">Engineer</label>
                                            <input className="checkbox" type="checkbox" name="others" id="others"
                                                   value="Others" onChange={() => selectDepartment("Others")}/>
                                                <label className="text" htmlFor="others">Others</label>
                        </div>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="salary">Salary</label>
                        <input className="input" id="salary" type="range" name="salary" min="300000" max="500000" step="100" onChange={takeSalary}/>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="startDate">Start Date</label>
                        <div className="date-setter">
                            <select name="day" id="day" onChange={takeDate}>
                                <option value="">Day</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select name="month" id="month" onChange={takeDate}>
                                <option value="">Month</option>
                                <option value="Jan">January</option>
                                <option value="Feb">February</option>
                                <option value="Mar">March</option>
                                <option value="Apr">April</option>
                                <option value="May">May</option>
                                <option value="Jun">June</option>
                                <option value="Jul">July</option>
                                <option value="Aug">August</option>
                                <option value="Sep">September</option>
                                <option value="Oct">October</option>
                                <option value="Nov">November</option>
                                <option value="Dec">December</option>
                            </select>
                            <select name="year" id="year" onChange={takeDate}>
                                <option value="">Year</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                            </select>
                        </div>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="notes">Notes</label>
                        <textarea className="input" id="notes" name="notes" placeholder="" onChange={takeNotes}></textarea>
                    </div>
                    <div className="buttonParent">
                        <a href="./home.html" className="resetButton button cancelButton">Cancel</a>
                        <div className="submit-reset">
                            <button type="submit" className="button submitButton" id="submitButton" onClick={submit}>Submit</button>
                            <button type="reset" className="button resetButton">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PayrollForm;