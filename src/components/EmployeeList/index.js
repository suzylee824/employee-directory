import React from 'react';

function EmployeeList(props) {


    return (
        <tbody>
            {props.emp.map(employee =>{
                const date = new Date(employee.dob.date)
        
                return (<tr>
                    <th scope='row'><img src={employee.picture.thumbnail} /></th>
                    <td>{employee.name.first} {employee.name.last}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                    <td>{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</td>
                </tr>)
            }
                
            )}
        </tbody>
    )


}

export default EmployeeList;