import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  //setting state to users with an empty array as it's value
  const [users, setUsers] = useState([])

  //useEffect will work like componentDidMount here
  useEffect(() => getUsers(), [])

  const getUsers = () => {
    axios.get('/users')
    .then(res => setUsers(res.data))
  }

  console.log(users)

  // How getUsers would look in a class component
  // getUsers = () => {
  //   axios.get('/users')
  //   .then(res => {
  //     this.setState({
  //       users: res.data
  //     })
  //   })
  // }

  const mappedUsers = users.map((user, i) => {
    return(
      <div key={i}>
        <h1>{user.username}</h1>
      </div> 
    )
  })

  return (
    <div className="App">
      {mappedUsers}
    </div>
  );
}

export default App;
