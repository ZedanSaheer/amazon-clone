import React, { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Payment from './Payment'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe} from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Order from './Order'

const App = () => {

  const promise = loadStripe('pk_test_51JTO0ZSJ3rx5NQLiKEyUknCFAov5qHr2XT7UcJvYHm0EfELMWs1jXSsXhSg8vtQwRYYE8rnYSqwILgz2wPdiQkim00U7ze6gFo')

  const [{},dispatch]=useStateValue();

  useEffect(() => { 
    auth.onAuthStateChanged(authUser =>{
      if(authUser){
          dispatch({
            type : 'SET_USER',
            user : authUser
          })
      }else{
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path='/orders'>
          <Header />
          <Order />
        </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
           <Payment />
           </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
