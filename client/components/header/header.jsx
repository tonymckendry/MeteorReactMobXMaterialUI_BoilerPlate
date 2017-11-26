import React from 'react'
import { observer } from 'mobx-react'
import { Box, Center, VBox } from 'react-layout-components'

import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import Drawer from 'material-ui/Drawer'
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'

import DashboardIcon from 'material-ui/svg-icons/action/dashboard'
import People from 'material-ui/svg-icons/social/people'
import Timeline from 'material-ui/svg-icons/action/timeline'
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import IconButton from 'material-ui/IconButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'

import GeneralState from '../../state/singletons/general'
import UserState from '../../state/singletons/users'
import { theme } from '../theme/theme'

const Header = () => {
    return (
        <div>
            <AppBar
                title="Nexgen"
                onLeftIconButtonTouchTap={() => {
                    GeneralState.toggleDrawer()
                }}
                style={{ boxShadow: '0px 2px 5px rgba(0,0,0,.5)' }}
            />
            {renderDrawer()}
        </div>
    )
}

export default observer(Header)

const renderDrawer = () => {
    return (
        <Drawer open={GeneralState.drawerOpen} docked={false} onRequestChange={open => GeneralState.toggleDrawer(open)}>
            <Paper style={{ padding: '20px', backgroundColor: theme.palette.primary1Color, color: 'white' }}>
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
                    leftIcon={<DashboardIcon color={getListItemColor('Dashboard')} />}
                    style={{ color: getListItemColor('Dashboard') }}
                />
                <ListItem
                    onClick={() => {
                        GeneralState.changeAppFunction('PeopleList')
                    }}
                    primaryText="People List"
                    leftIcon={<People color={getListItemColor('PeopleList')} />}
                    style={{ color: getListItemColor('PeopleList') }}
                />
                <ListItem
                    onClick={() => {
                        GeneralState.changeAppFunction('Analytics')
                    }}
                    primaryText="Analytics"
                    leftIcon={<Timeline color={getListItemColor('Analytics')} />}
                    style={{ color: getListItemColor('Analytics') }}
                />
                <ListItem
                    onClick={() => {
                        GeneralState.changeAppFunction('Settings')
                    }}
                    primaryText="Settings"
                    leftIcon={<SettingsIcon color={getListItemColor('Settings')} />}
                    style={{ color: getListItemColor('Settings') }}
                />
            </List>
        </Drawer>
    )
}

const getListItemColor = item => {
    if (GeneralState.appFunction === item) {
        return theme.palette.accent1Color
    } else {
        return null
    }
}
