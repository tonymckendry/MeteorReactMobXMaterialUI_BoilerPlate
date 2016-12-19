import React from 'react'
import { Center, Page, Box } from 'react-layout-components';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom'
import { Action, Dispatch, Register, State } from 'meteor/meteorflux:meteorflux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { theme } from '../constants/theme'

import { Login }  from './login/login.jsx'
import { LeaguePicks }  from './leaguePicks/leaguePicks.jsx'
import { MyPicks }  from './myPicks/myPicks.jsx'
import { Profile }  from './profile/profile.jsx'
import { Standings }  from './standings/standings.jsx'
import { ThisWeek }  from './thisWeek/thisWeek.jsx'

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
      selectedTab: State.get(App.Constants.State.selectedTab)
    }
  },
  render(){
    let content
    switch (this.data.selectedTab) {
    case 1:
      content = <MyPicks />
      break;
    case 2:
      content = <LeaguePicks />
      break;
    case 3:
      content = <Standings />
      break;
    case 4:
      content = <ThisWeek />
      break;
    case 5:
      content = <Profile />
      break;
    default:

    }
    if (!this.data.loggedIn) {
      return <Login/>
    }
    console.log('main is rendering')
    return (
      <Page>
        <Box>
          {content}
          <Footer />
        </Box>
      </Page>
    )
  }
})
