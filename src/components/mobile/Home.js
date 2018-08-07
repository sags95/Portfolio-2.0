import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from '../Theme';
import '../../App.css';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WorkIcon from '@material-ui/icons/WorkOutline'
import PersonIcon from '@material-ui/icons/PersonOutline';
import MessageIcon from '@material-ui/icons/MessageOutlined';

 class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
        }
    }

    handleChange = (event, value) => {
        this.setState({ value });
      };

    render(){
        return(
            <div>
                <MuiThemeProvider theme={theme}>
                    <div className="background">
                        <Paper style={{width: '100vw'}}>
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                fullWidth
                                indicatorColor="primary"
                                textColor="primary"
                            >
                            <Tab icon={<WorkIcon/>} label="Work"/>
                            <Tab icon={<PersonIcon/>} label="Me"/>
                            <Tab icon={<MessageIcon/>} label="Contact"/>
                            </Tabs>
                        </Paper>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Home;