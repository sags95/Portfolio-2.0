import React, { Component } from 'react';
import Home from './components/mobile/Home';
import DesktopHome from './components/desktop/Desktop_Home'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isMobile: undefined,
    }
  }

  componentWillMount(){
    if (window.matchMedia("(min-width: 500px)").matches){
      //console.log('desktop!')
      this.setState({isMobile: false})
    } else {
      //console.log('mobile!')
      this.setState({isMobile: true})
    }
  }

  render() {
    if (this.state.isMobile === true){
      return(
        <Home/>
      )
    } else {
      return (
        <DesktopHome/>
      );
    }
   
  }
}

export default App;
