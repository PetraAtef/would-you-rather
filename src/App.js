import React, { Component, Fragment } from 'react';
import Login from './components/Login';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import { connect } from 'react-redux'
import { handleInitialData } from './state/action-creators/index'
import  LoadingBar  from 'react-redux-loading-bar';
import NewQuestion from './components/NewQuestion';
import Navbar from './components/Navbar';
import ViewQuestion from './components/ViewQuestion';
import ProtectedRoute from './ProtectedRoute';
import Leaderboard from './components/Leaderboard';
import Page404 from './components/Page404';

class App extends Component{
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      <BrowserRouter>
      <Fragment>
        <LoadingBar />
            <Route path='/login' exact component={Login} />
           {this.props.logged_in === true? <Login/>
           : <div>
             <Navbar/>
             {/* <ProtectedRoute path='/' component={Navbar} /> */}
             <ProtectedRoute path='/' name='Dashboard' exact component={Dashboard} />
             <ProtectedRoute path='/question/:id' exact component={ViewQuestion} />
             <ProtectedRoute path='/new' exact component={NewQuestion} />
             <ProtectedRoute path='/leaderboard' exact component={Leaderboard} />
             <ProtectedRoute path='/404' exact component={Page404} />
             {/* <Route path */}
           </div>
           }
      </Fragment>
      </BrowserRouter>
      
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    logged_in: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
