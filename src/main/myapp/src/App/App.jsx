import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { PrivateRoute } from '../_components';
import { HomePage} from '../HomePage';
import {LoginPage} from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { AdminPage } from '../AdminPage';
import { NoAccessPage } from '../NoAccessPage';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    history.listen((location, action) => {
    }); 
  }

  render(){
    // const {alert} = this.props;
    return (
        <div>
            <Router history={history}>
              <Switch>
                <PrivateRoute exact path="/admin" component={AdminPage}/>
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/noaccess" component={NoAccessPage} />>
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
        </div>
    );
  }
}

function mapState(state){
  return {};
}

const actionCreators = {

}

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };