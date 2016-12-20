import React from 'react'
import { Center, Page, VBox, Box } from 'react-layout-components';

import AppBar from 'material-ui/AppBar';


export const Market = React.createClass({
  displayName: 'Market',
  mixins: [ReactMeteorData],
  getMeteorData(){
      return{
          checking: State.get(App.Constants.State.login.checking)
      }
  },
  render(){
    return(
    <AppBar style={{textAlign: 'center', backgroundColor: '#455a64'}} title='Market' showMenuIconButton={false}/>
    )
  }
})
