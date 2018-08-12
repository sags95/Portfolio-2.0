import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from '../Theme';
import '../.././App.css'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WorkIcon from '@material-ui/icons/WorkOutline'
import PersonIcon from '@material-ui/icons/PersonOutline';
import MessageIcon from '@material-ui/icons/MessageOutlined';

const styles = {
    root: {
        backgroundColor: '#0036ff'
    }
}

let mql = window.matchMedia('(max-width: 500px)');

 class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
            isMobile: undefined,
        }
    }

    layout = (e) => {
        if (e.matches){
            this.setState({isMobile: true})
        } else {
            this.setState({isMobile: false})
        }
    }

    componentDidMount(){
        mql.addListener(this.layout)
    }

    handleChange = (event, value) => {
        this.setState({ value });
      };

    render(){
        if (this.state.isMobile === true){
            return(
                <div>
                    <MuiThemeProvider theme={theme}>
                        <div className="background">
                            <div className='tabBar'>
                                <Paper style={{width: '100vw'}}>
                                    <Tabs
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        fullWidth
                                        indicatorColor="secondary"
                                        textColor="secondary"
                                        className="tabBackground"
                                    >
                                    <Tab icon={<WorkIcon color={'secondary'}/>} label="Work"/>
                                    <Tab icon={<PersonIcon color='secondary'/>} label="Me"/>
                                    <Tab icon={<MessageIcon color='secondary'/>} label="Contact"/>
                                    </Tabs>
                                </Paper>
                            </div>
                        </div>
                    </MuiThemeProvider>
                </div>
            )
        } else {
            return(
                <div>
                    <h1>Desktop!</h1>
                </div>
            )
        }
       
    }
}

export default Home;