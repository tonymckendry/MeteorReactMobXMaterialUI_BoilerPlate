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
import DashboardIcon from 'material-ui/svg-icons/action/dashboard'
import People from 'material-ui/svg-icons/social/people'
import Timeline from 'material-ui/svg-icons/action/timeline'
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import IconButton from 'material-ui/IconButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Login from './login/login'
import { PersonaTheme } from './theme/theme'
import Dashboard from './dashboard/dashboard'
import PeopleList from './peopleList/peopleList'
import Analytics from './analytics/analytics'
import Settings from './settings/settings'
import { UserState, GeneralState, PeopleState } from '../directory/singletons'

export const Main = observer(
    React.createClass({
        displayName: 'Main',
        mixins: [OnResize],
        _renderDrawer() {
            return (
                <Drawer open={GeneralState.drawerOpen} docked={false} onRequestChange={open => GeneralState.toggleDrawer(open)}>
                    <Paper style={{ padding: '20px', backgroundColor: PersonaTheme.palette.primary1Color, color: 'white' }}>
                        <Box>
                            <Center>
                                <Avatar size={50}>
                                    <span style={{ fontFamily: 'sans-serif' }}>
                                        {UserState.currentUser.profile.firstName[0]}
                                        {UserState.currentUser.profile.lastName[0]}
                                    </span>
                                </Avatar>
                            </Center>
                            <VBox style={{ marginLeft: '15px' }}>
                                <h2 style={{ margin: '0', marginTop: '10px' }}>{UserState.currentUser.profile.firstName}</h2>
                                <h2 style={{ margin: '0' }}>{UserState.currentUser.profile.lastName}</h2>
                            </VBox>
                        </Box>
                    </Paper>
                    <List>
                        <ListItem
                            onClick={() => {
                                GeneralState.changeAppFunction('Dashboard')
                            }}
                            primaryText="Dashboard"
                            leftIcon={<DashboardIcon color={this._getListItemColor('Dashboard')} />}
                            style={{ color: this._getListItemColor('Dashboard') }}
                        />
                        <ListItem
                            onClick={() => {
                                GeneralState.changeAppFunction('PeopleList')
                            }}
                            primaryText="People List"
                            leftIcon={<People color={this._getListItemColor('PeopleList')} />}
                            style={{ color: this._getListItemColor('PeopleList') }}
                        />
                        <ListItem
                            onClick={() => {
                                GeneralState.changeAppFunction('Analytics')
                            }}
                            primaryText="Analytics"
                            leftIcon={<Timeline color={this._getListItemColor('Analytics')} />}
                            style={{ color: this._getListItemColor('Analytics') }}
                        />
                        <ListItem
                            onClick={() => {
                                GeneralState.changeAppFunction('Settings')
                            }}
                            primaryText="Settings"
                            leftIcon={<SettingsIcon color={this._getListItemColor('Settings')} />}
                            style={{ color: this._getListItemColor('Settings') }}
                        />
                    </List>
                </Drawer>
            )
        },
        _getListItemColor(item) {
            if (GeneralState.appFunction === item) {
                return PersonaTheme.palette.accent1Color
            } else {
                return null
            }
        },
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
                        content = <Analytics />
                        break
                    case 'Settings':
                        content = <Settings />
                        break
                }
                component = (
                    <Page>
                        {this._renderDrawer()}
                        <AppBar
                            title="Persona"
                            iconElementLeft={
                                PeopleState.panelOpen || PeopleState.personToDetail ? (
                                    <IconButton>
                                        <KeyboardArrowLeft />
                                    </IconButton>
                                ) : null
                            }
                            onLeftIconButtonTouchTap={
                                PeopleState.panelOpen || PeopleState.personToDetail
                                    ? () => {
                                          PeopleState.setPanelOpen(false)
                                          PeopleState.resetPersonToDetail()
                                      }
                                    : GeneralState.toggleDrawer
                            }
                            style={{ boxShadow: '0px 2px 5px rgba(0,0,0,.5)' }}
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
