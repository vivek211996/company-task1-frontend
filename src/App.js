import React, { Component } from 'react';
import './App.css';
import fire from './config/fire';
import Home from './home';
import Login from './login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    };

  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      
      if (user) {
        this.setState({ user });
       
      } else {
        this.setState({ user: null });
        
      }
    });
  }
  render() {
    return (
     <div>{this.state.user ? ( <Home/>) : (<Login />)}</div>
  )
}
}

 export default App;
