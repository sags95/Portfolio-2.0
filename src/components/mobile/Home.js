import React, { Component } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from '../Theme';
import '../.././App.css'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WorkIcon from '@material-ui/icons/WorkOutline'
import PersonIcon from '@material-ui/icons/PersonOutline';
import MessageIcon from '@material-ui/icons/MessageOutlined';
import Work from '../tabs/Work';
import Me from '../tabs/Me';
import Contact from '../tabs/Contact';
import {Link, Route} from 'react-router-dom';


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

    componentWillMount(){
        mql.addListener(this.layout)
        if (mql.matches){
            this.setState({isMobile: true})
        } else {
            this.setState({isMobile: false})
        }
    }

    handleChange = (event, value) => {
        this.setState({ value });
      };

    render(){
        if (this.state.isMobile === true){
            return(
                <div>
                   {/* Routes */}
                    <div>
                        <Route exact path='/' component={Me}/>
                        <Route path='/work' component={Work}/>
                        <Route path='/contact' component={Contact}/>
                    </div>

                    {/* Tab bar */}
                    <MuiThemeProvider theme={theme}>
                        <div style={{backgroundColor: '#0008ca'}}>
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
                                    <Tab icon={<PersonIcon/>} label="Me" component={Link} to='/'/>
                                    <Tab icon={<WorkIcon/>} label="Work" component={Link} to='/work'/>
                                    <Tab icon={<MessageIcon/>} label="Contact" component={Link} to='/contact'/>
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