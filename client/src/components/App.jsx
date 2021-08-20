import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Landing from './Landing';

// Redux functions
// import * as actions from '../actions'
import {fetchUser} from '../actions'


const Dashboard = () => {
  return <h2>Dashboard</h2>
}
const SurveyNew = () => {
  return <h2>SurveyNew</h2>
}

const App = (props) => {

  useEffect(() => {
    props.fetchUser()
  }, [])

  return (
    <div className='container'>
      <BrowserRouter>
        <>
          <Header />
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/surveys" component={Dashboard}></Route>
          <Route path="/surveys/new" component={SurveyNew}></Route>
        </>
      </BrowserRouter>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser())
  }
}



export default connect(null, mapDispatchToProps)(App)
