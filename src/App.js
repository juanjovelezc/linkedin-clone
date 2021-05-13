import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useEffect } from 'react';

  function App() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch()

    useEffect (() => {
      auth.onAuthStateChanged(userAuth => {
        if(userAuth){
          // user is logged in
          dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          }))
        } else {
          //user logged out
          dispatch(logout())
        }
      })
    }, [])
      return (
        <div className="app">

            <Header />
          {!user ? <Login /> :(
          <div className='app__body'>
            <Sidebar />
              <Feed />
          
          </div>
          )}
        </div>
      );
    }

    export default App;
