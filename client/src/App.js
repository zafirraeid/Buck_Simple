import React, {useState, useEffect} from "react"
import Home from "./pages/index"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Axios from 'axios'
import SignUp from './pages/signup'
import SignIn from './pages/signin'
import Feed from './pages/feed'
import UserContext from "./context/UserContext"


function App() {
const [userData, setUserData] = useState({token: undefined, user: undefined})
useEffect(()=> {
  const loginStatus = async () => {
    let token = localStorage.getItem('auth-token')
    if(token === null) {
      return localStorage.setItem('auth-token', '')
      token = ''
    }
    const tokenRes = await Axios.post('http://localhost:5000/users/validToken', null, {headers: {'x-auth-token': token}})
    if(tokenRes.data) {
      const userRes = await Axios.get('http://localhost:5000/users', {headers: {'x-auth-token': token}})
      setUserData({
        token,user:userRes.data
      })
    }
  }
  loginStatus()
}, [])
  return(
  <Router>
<UserContext.Provider value = {{userData, setUserData}}>
<Switch>
<Route path = '/' component= {Home} exact />
<Route path = '/signin' component= {SignIn} exact />
<Route path = '/signup' component= {SignUp} exact />
<Route path = '/feed' component= {Feed} exact />
</Switch>
</UserContext.Provider>
  </Router>
  )
}

export default App