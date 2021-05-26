import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser } from './services/UserService'
import Tabs from "./components/Tabs"; 

function App() {

  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [numberOfUsers, setNumberOfUsers] = useState(0)


  const userCreate = (e) => {
      createUser(user)
        .then(response => {
          console.log(response);
          setNumberOfUsers(numberOfUsers+1)
      });
  }

  const fetchAllUsers = (e) => {
    getAllUsers(user)
      .then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
      });
  }

  // useEffect(() => {
  //   getAllUsers()
  //     .then(users => {
  //       console.log(users)
  //       setUsers(users);
  //       setNumberOfUsers(users.length)
  //     });
  // }, [])

  const onChangeForm = (e) => {
      if (e.target.name === 'searchKey') {
          user.searchKey = e.target.value;
      }
      setUser(user)
  }
  
    
    return (
        <div className="App">
          <Header></Header>
          <div className="container mrgnbtm">
            <div className="row">
              {/* <div className="col-md-4">
                  <CreateUser 
                    user={user}
                    onChangeForm={onChangeForm}
                    createUser={userCreate}
                    getAllUsers={fetchAllUsers}
                    >
                  </CreateUser>
              </div> */}
              <div className="col-md-4">
                  <DisplayBoard
                    numberOfUsers={numberOfUsers}
                    getAllUsers={fetchAllUsers}
                  >
                  </DisplayBoard>
              </div>
              {/* CUSTOME FOR TAB VIEW */}
                    <div className="col-md-8">
                        <Tabs> 
                            <div label="Search By IFSC"> 
                              <CreateUser 
                                user={user}
                                onChangeForm={onChangeForm}
                                createUser={userCreate}
                                getAllUsers={fetchAllUsers}
                                >
                              </CreateUser>
                            </div> 
                            <div label="Search By Bank Name"> 
                              <CreateUser 
                                  user={user}
                                  onChangeForm={onChangeForm}
                                  createUser={userCreate}
                                  getAllUsers={fetchAllUsers}
                                  >
                                </CreateUser>
                            </div> 
                          </Tabs> 
                      </div>
            </div>
          </div>
          <div className="row mrgnbtm">
            <Users users={users}></Users>
          </div>
        </div>
    );
}

export default App;
