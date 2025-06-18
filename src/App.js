import React from 'react'
import Searchbar from './Searchbar'
import Searchbarapi from './Searchbarwithapi.jsx/Searchbarapi'
import "./App.css";
import Pagination from './Pagination/Pagination';
import Todoapp from './TodoApp/Todoapp';
import Infinite from './Infinite Scroll/Infinite';
import Listbar from './Todoapp1/Listbar';
import Page from './Todoapp1/Page/Page';
import AutoSearch from './Todoapp1/AutoSearch/AutoSearch';
import AutoSearchwitapi from './Todoapp1/AutoSearch/AutoSearchwitapi';
import Accordian from './Todoapp1/Accordian/Accordian';
import Fileexplorer from './Todoapp1/File Explorer/Fileexplorer';
import data from './Todoapp1/File Explorer/Fileexplorerdata.json'

const App = () => {
  return (
    <div className="App"> 
      <Infinite/>
    </div>
  )
}

export default App
