import React, {useState} from 'react';
import './App.css';
import Adduser from './components/User/Adduser';
import Listitems from './components/Userlist/Listitems';

function App() {
  const [userlist, setUserlist]= useState([]);
  const onAdduser = (uName, uAge)=>{
    setUserlist((prevUserlist)=>{
      return [...prevUserlist, {name:uName, age:uAge, id:Math.random()*2}]
    })
  }
  return (
    <div className="App">
     <Adduser onAdduser={onAdduser} />
     <Listitems users={userlist} />
    </div>
  );
}

export default App;
