import React, {useEffect, useState} from "react";
import {getEmployee} from "../../Services/service";
import {useTable} from "react-table";
import logo from "../../assets/images/logo.png";
import addIcon from "../../assets/icons/add-24px.svg";
import '../Home/home.css'

function Employee () {

    const [columns, setColumns] = useState([])
    const [data, setData] = useState([])

    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow
    } = tableInstance

    useEffect(() => {
        preProcessing()
    },[])

    const preProcessing = () => {
        getEmployee().then(response => {
            createColumns(response.data.data)
            setData(response.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const createColumns = (array) => {
        if (array[0] != null){
            let columnNames = Object.keys(array[0])
            let columns = columnNames.map(function (col) {
                let obj = {
                        Header : col,
                        Footer : col,
                        accessor : col,
                    }
                    return obj
            })
            console.log(columns)
            setColumns(columns)
        }
    }

    return(
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
                    <table {...getTableProps()}>
                        <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return(
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                        </tbody>
                        {/*<tfoot>*/}
                        {/*{footerGroups.map((footerGroup) => (*/}
                        {/*    <tr {...footerGroup.getFooterGroupProps()}>*/}
                        {/*        {footerGroup.headers.map((column) => (*/}
                        {/*            <td {...column.getFooterGroupProps}>{column.render('Footer')}</td>*/}
                        {/*        ))}*/}
                        {/*    </tr>*/}
                        {/*))}*/}
                        {/*</tfoot>*/}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Employee;