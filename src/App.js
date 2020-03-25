import React, { useState, useEffect } from 'react';
import Header from './components/Header/index.js';
import SearchForm from './components/SearchForm/index.js';
import Table from './components/Table/index.js';
import getAllEmployees from './utils/API.js'
import './App.css';

function App() {
//   state = {
//     employees: [],
//     input: '',
//     searchedEmployees: []
// }

const [ emp, setEmp ] = useState([]);
const [ input, setInput ] = useState('');
const [ searchedEmp, setSearchedEmp ] = useState([]);



useEffect(()=> {
  getAllEmployees()
  .then(result => {
    // this.setState({
    //     employees: result.data.results,
    //     searchedEmployees: result.data.results
    // })
     // console.log(this.state.employees)
     setEmp(result.data.results);
     setSearchedEmp(result.data.results);
  })
}, [])

useEffect(()=>{
setSearchedEmp(emp.filter(a=>a.name.first.toLowerCase().includes(input) 
|| a.name.last.toLowerCase().includes(input) || a.email.includes(input)))
}, [input])
  

const handleSort = (val)=> {
  console.log(val)

      const sorted = emp.sort((a,b)=> a.name.first < b.name.first ? -1 : a.name.first > b.name.first ? 1 : 0)
      setEmp(sorted)
}

  return (
    <div className="App">
      <Header />
      <SearchForm search={setInput}/>
      <br />
      <Table emp={searchedEmp} handleSort={handleSort}/>
    </div>
  );
}

export default App;
