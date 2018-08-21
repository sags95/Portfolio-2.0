import React, { Component } from 'react';
import { Typography, Card, CardHeader, CardContent, Avatar } from '@material-ui/core';

export default class Me extends Component {
    render(){
        return(
           <div className='background'>
                <Typography variant='display1' style={{color: '#fff'}}>Welcome</Typography>
                <Typography variant='display4' style={{color: '#fff'}}></Typography>
            <div className='cardWrap'>
                <Card raised>
                    <CardContent>
                        <Typography variant='headline'>I'm Alex</Typography>
                    </CardContent>
                </Card>
            </div>
           </div>
        )
    }
}