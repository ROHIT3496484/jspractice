import React from 'react'
import Searchbar from './Searchbar'
import Searchbarapi from './Searchbarwithapi.jsx/Searchbarapi'
import "./App.css";
import Pagination from './Pagination/Pagination';
import Todoapp from './TodoApp/Todoapp';
import Infinite from './Infinite Scroll/Infinite';
import Listbar from './Todoapp1/Listbar';

const App = () => {
  return (
    <div className="App"> 
      <Listbar/>
    </div>
  )
}

export default App
