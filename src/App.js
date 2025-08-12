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
import FormikForm from './Realtimevalidation/FormikForm';
import Searchapi from './Rewise/Searchapi';
import AutoSearchwo from './Rewise/AutoSearchwo';
import Repagination from './Rewise/Repagination';
import ReinfiniteScrolldata from './Rewise/ReinfiniteScrolldata';
import Retodo from './Rewise/Retodo';
import Dropdownselect from './dropdownsekect/Dropdownselect';
import FoodMenu from './Foodcart+addcart/Foodcart';
import FoodMenumore from './Foodcart+addcart/FoodMenumore';
import DebouncedSearch from './Live Dishes Search/DishesSearch';
import Searchdishes from './Live Dishes Search/Searchdishes';
import Searchwithapi from './Rewise/Searchwithapi';
import Searchwithcondition from './Searchwith4button/Searchwithcondition';
import Searchwithdropdown from './Searchwith4button/Searchwithdropdown';

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
    <Searchwithdropdown/>
  
    </div>
  )
}

export default App
