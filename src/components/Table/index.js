import React from 'react';
import './style.css';
import EmployeeList from '../EmployeeList/index.js'

function Table(props) {
console.log(props.handleSort)
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col" onClick={()=>{props.handleSort('name')}}>Name</th>
                    <th scope="col" onClick={()=>{props.handleSort('phone')}}>Phone</th>
                    <th scope="col" onClick={()=>{props.handleSort('email')}}>Email</th>
                    <th scrope="col" onClick={()=>{props.handleSort('dob')}}>DOB</th>
                </tr>
            </thead>
            <EmployeeList emp={props.emp}/>
        </table>
    )
}

export default Table;