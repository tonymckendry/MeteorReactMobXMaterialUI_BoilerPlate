import React from 'react'
import { Center, Page, Box } from 'react-layout-components';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom'

import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const Main = React.createClass({
  displayName: "Main",
  // childContextTypes:{
  //   muiTheme: React.PropTypes.object
  // },
  // getChildContext(){
  //   return{
  //     muiTheme: getMuiTheme(theme)
  //   }
  // },
  render(){
    return (
      <Page style={{backgroundColor: '#212121'}}>
        <Box>
          <h2>Hello this is working </h2>
        </Box>
      </Page>
    )
  }
})
