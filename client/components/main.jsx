import React from 'react'
import { Center, Page, Box, VBox } from 'react-layout-components'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { OnResize } from 'react-window-mixins'

import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/raisedButton'
import Drawer from 'material-ui/Drawer'
import Avatar from 'material-ui/Avatar'
import { List, ListItem } from 'material-ui/List'
import Paper from 'material-ui/Paper'
import { observer } from 'mobx-react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Login from './login/login'
import { theme } from './theme/theme'
import Header from './header/header'
import Dashboard from './dashboard/dashboard'
import PeopleList from './peopleList/peopleList'
import Analytics from './analytics/analytics'
import Settings from './settings/settings'
import { UserState } from '../directory/singletons'
import GeneralState from '../state/singletons/general'

export const Main = observer(
    React.createClass({
        displayName: 'Main',
        mixins: [OnResize],

        render() {
            let component
            if (UserState.authenticated && UserState.currentUser && UserState.currentUser.profile) {
                let content
                switch (GeneralState.appFunction) {
                    case 'Dashboard':
                        content = <Dashboard />
                        break
                    case 'PeopleList':
                        content = <PeopleList height={this.state.window.height} />
                        break
                    case 'Analytics':
                        content = <Analytics height={this.state.window.height} />
                        break
                    case 'Settings':
                        content = <Settings />
                        break
                }
                component = (
                    <Page>
                        <Header />
                        {content}
                    </Page>
                )
            } else {
                component = <Login />
            }
            return <MuiThemeProvider muiTheme={getMuiTheme(theme)}>{component}</MuiThemeProvider>
        }
    })
)
