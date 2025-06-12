import React from 'react'
import Searchbar from './Searchbar'
import Searchbarapi from './Searchbarwithapi.jsx/Searchbarapi'
import "./App.css";
import Pagination from './Pagination/Pagination';
import Todoapp from './TodoApp/Todoapp';

const App = () => {
  return (
    <div className="App"> 
      <Todoapp/>
    </div>
  )
}

export default App
