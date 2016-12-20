import React from 'react'
import { Center, Page, Box } from 'react-layout-components';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom'
import { Action, Dispatch, Register, State } from 'meteor/meteorflux:meteorflux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { theme } from '../constants/theme'

import { Login }  from './login/login.jsx'
import { CreateProfile }  from './profile/createProfile.jsx'
import { Profile }  from './profile/profile.jsx'
import { Dashboard }  from './dashboard/dashboard.jsx'
import { Market }  from './market/market.jsx'
import { People }  from './people/people.jsx'

import { Footer } from './footer.jsx'

export const Main = React.createClass({
  displayName: "Main",
  mixins: [ReactMeteorData],
  childContextTypes:{
    muiTheme: React.PropTypes.object
  },
  getChildContext(){
    return{
      muiTheme: getMuiTheme(theme)
    }
  },
  getMeteorData(){
    return{
      loggedIn: State.get(App.Constants.State.loggedIn),
      selectedTab: State.get(App.Constants.State.selectedTab),
      showCreateProfile: State.get(App.Constants.State.showCreateProfile),
    }
  },
  render(){
    if (this.data.showCreateProfile) {
      return <CreateProfile/>
    }
    let content
    switch (this.data.selectedTab) {
    case 1:
      content = <Dashboard />
      break;
    case 2:
      content = <Market />
      break;
    case 3:
      content = <People />
      break;
    case 4:
      content = <Profile />
      break;
    default:

    }
    if (!this.data.loggedIn) {
      return <Login/>
    }
    console.log('main is rendering')
    return (
      <Page style={{backgroundColor: '#212121'}}>
        <Box>
          {content}
          <Footer />
        </Box>
      </Page>
    )
  }
})
