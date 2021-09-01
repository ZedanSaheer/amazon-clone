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
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const promise = loadStripe('pk_test_51JTO0ZSJ3rx5NQLiKEyUknCFAov5qHr2XT7UcJvYHm0EfELMWs1jXSsXhSg8vtQwRYYE8rnYSqwILgz2wPdiQkim00U7ze6gFo')

  const [{ basket }, dispatch] = useStateValue();

  const popUp = (text , e) => toast.success( text + " " + e, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });;

  const popUpWarn=(text ,e)=> toast.warn(text + ' '+ e, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

    const popUpError = (text , e) => toast.error(text + ' ' + e, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket])

  return (
    <Router>
      <div className="app">
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{zIndex:"999" , padding:"30px"}}
          enableMultiContainer={true}
        />
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login popUp={popUp} popUpError={popUpError}/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout popUpError={popUpError}/>
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment popUp={popUp} popUpWarn={popUpWarn}/>
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home popUp={popUp} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
