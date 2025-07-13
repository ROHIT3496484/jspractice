import React, { useState } from 'react'
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
import  Accodian  from './Todoapp1/Accordian/Accodian';
import Fileexpo from './Todoapp1/Accordian/FileExpo/Fileexpo';
import Toast from './Toast Notification/Toast';
import Proressbar from './Progressbar/Proressbar';
import Progresshome from './Todoapp1/Progressbar1/Progresshome';

const App = () => {
 /* const data = [{ "name": "A",
    "type" : "folder",
    "children":[{ "name": "B",
    "type" : "folder",
    "children":[{ "name": "c",
    "type" : "file",
  }]
  }]
  }] */
 //const [show, setShow]  = useState(false);
  //{show?<Proressbar/>:""}
 //<button onClick={()=>setShow(!show)}>Toggle</button>
  return (
    <div className="App"> 
    <Progresshome/>
  
    </div>
  )
}

export default App
