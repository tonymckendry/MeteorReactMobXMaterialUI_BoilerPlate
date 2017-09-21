import React from 'react'
import { Center, Page, Box } from 'react-layout-components'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/raisedButton'
import Drawer from 'material-ui/Drawer'
import { observer } from 'mobx-react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Login from './login/login'
import { PersonaTheme } from './theme/theme'
import Dashboard from './dashboard/dashboard'
import PeopleList from './peopleList/peopleList'
import Analytics from './analytics/analytics'
import Settings from './settings/settings'
import { UserState, GeneralState } from '../directory/singletons'

export const Main = observer(
    React.createClass({
        displayName: 'Main',
        render() {
            let component
            if (UserState.authenticated) {
                let content
                switch (GeneralState.appFunction) {
                    case 'Dashboard':
                        content = <Dashboard />
                        break
                    case 'PeopleList':
                        content = <PeopleList />
                        break
                    case 'Analytics':
                        content = <Analytics />
                        break
                    case 'Settings':
                        content = <Settings />
                        break
                }
                component = (
                    <Page>
                        <Drawer open={GeneralState.drawerOpen} docked={false} />
                        <AppBar
                            title="Persona"
                            onLeftIconButtonTouchTap={GeneralState.toggleDrawer}
                            onRequestChange={o => {
                                console.log(o)
                                GeneralState.toggleDrawer()
                            }}
                        />
                        {content}
                    </Page>
                )
            } else {
                component = <Login />
            }
            return <MuiThemeProvider muiTheme={getMuiTheme(PersonaTheme)}>{component}</MuiThemeProvider>
        }
    })
)
