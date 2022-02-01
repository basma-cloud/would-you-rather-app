import React from 'react';
import { Component } from 'react';
import Nav from './Nav'


class NoMatch extends Component{
    render(){
        return(
          
            <div>
          <Nav/>
          error 404 , page not found
          </div>
        )
    }
}

export default NoMatch