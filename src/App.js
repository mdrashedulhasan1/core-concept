import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Users></Users>
        <Counter></Counter>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(5);
  return(
    
    <div>
      <h1>Initial Counter: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data =>setUsers(data))
  },[])
  return(
    <div>
        {/* <h3>Dynamic User: {user.length}</h3> */}
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ul>

        <ul>
          {
            users.map(user => <li>{user.id}</li>)
          }
        </ul>

        <ul>
          {
            users.map(user => <li>{user.username}</li>)
          }
        </ul>

        <ul>
          {
            users.map(user => <li>{user.email}</li>)
          }
        </ul>
    </div>
  )
}

export default App;
