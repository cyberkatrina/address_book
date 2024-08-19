import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import User from './User';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api?results=25')
        .then(response => {
          return response.json()
       }).then(arrayOfUsers => setUsers(arrayOfUsers.results))
       .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <u><h1>Random Users</h1></u>
          <ol>
            {users.map((user, index) => {
              return (
                <User 
                key={index}
                name={user.name.first}
                last={user.name.last}
                pic={user.picture.thumbnail}
                gender={user.gender}
                email={user.email}
                age={user.dob.age}
                house={user.location.street.number}
                street={user.location.street.name}
                city={user.location.city}
                state={user.location.state}
                country={user.location.country}
                zip={user.location.postcode}
                />
              )
            })}
          </ol>
      </header>
    </div>
  );
}

export default App;
