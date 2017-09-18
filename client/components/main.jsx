import React from 'react'
import { Center, Page, Box } from 'react-layout-components'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import RaisedButton from 'material-ui/raisedButton'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Login from './login/login'
import { PersonaTheme } from './theme/theme'

export const Main = React.createClass({
    displayName: 'Main',
    // childContextTypes:{
    //   muiTheme: React.PropTypes.object
    // },
    // getChildContext(){
    //   return{
    //     muiTheme: getMuiTheme(theme)
    //   }
    // },
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(PersonaTheme)}>
                <Login />
            </MuiThemeProvider>
        )
    }
})
