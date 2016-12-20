import React from 'react'
import { Center, Page, VBox, Box } from 'react-layout-components';
import Divider from 'material-ui/Divider';
import PersonOutline from 'material-ui/svg-icons/social/person-outline'
import People from 'material-ui/svg-icons/social/people'
import DateRange from 'material-ui/svg-icons/action/date-range'
import Equalizer from 'material-ui/svg-icons/av/equalizer'
import Fingerprint from 'material-ui/svg-icons/action/fingerprint'
import Dashboard from 'material-ui/svg-icons/action/dashboard'
import TrendingUp from 'material-ui/svg-icons/action/trending-up'
import FormatListNumbered from 'material-ui/svg-icons/editor/format-list-numbered'


export const Footer = React.createClass({
  displayName: "Footer",
  mixins: [ReactMeteorData],
  getMeteorData(){
    return{
      selected: State.get(App.Constants.State.selectedTab)
    }
  },
  tabStyle: {
    box: {
      width: '25vw',
      textAlign: 'center',
      height : '70px',
      color: '#212121',
      fontSize: '12px'
    },
    selectedBox:{
      width: '25vw',
      textAlign: 'center',
      height : '70px',
      color: 'white',
      backgroundColor: '#00BCD4',
      fontSize: '14px'
    },
    text: {
      margin : '0 auto',
      fontSize: '13px'
    },
    icon:{
      margin: '0 auto',
      marginTop: '15px',
      color: '#455A64'
    },
    selectedIcon:{
      color: 'white',
      margin: '0 auto',
      marginTop: '15px'
    }
  },
  render(){
    return (
        <VBox style={{
          'position' : 'absolute',
          'bottom' : '0',
          backgroundColor: 'white'
        }}
        justifyContent='space-between'>
          <Divider style={{
            'backgroundColor' : "#e0e0e0",
            'width' : '100vw',
          }}/>
          <Box>
            <VBox
            style={this.data.selected == 1 ? this.tabStyle.selectedBox : this.tabStyle.box}
            onClick={()=>{App.Utils.general.tabSelected(1)}}>
              <Dashboard style={this.data.selected == 1 ? this.tabStyle.selectedIcon : this.tabStyle.icon}/>
              <span style={this.tabStyle.text}>Dashboard</span>
            </VBox>
            <VBox
            style={this.data.selected == 2 ? this.tabStyle.selectedBox : this.tabStyle.box}
            onClick={()=>{App.Utils.general.tabSelected(2)}}>
              <TrendingUp style={this.data.selected == 2 ? this.tabStyle.selectedIcon : this.tabStyle.icon}/>
              <span style={this.tabStyle.text}>Market</span>
            </VBox>
            <VBox
            style={this.data.selected == 3 ? this.tabStyle.selectedBox : this.tabStyle.box}
            onClick={()=>{App.Utils.general.tabSelected(3)}}>
              <People style={this.data.selected == 3 ? this.tabStyle.selectedIcon : this.tabStyle.icon}/>
              <span style={this.tabStyle.text}>People</span>
            </VBox>
            <VBox
            style={this.data.selected == 4 ? this.tabStyle.selectedBox : this.tabStyle.box}
            onClick={()=>{App.Utils.general.tabSelected(4)}}>
              <Fingerprint style={this.data.selected == 4 ? this.tabStyle.selectedIcon : this.tabStyle.icon}/>
              <span style={this.tabStyle.text}>Profile</span>
            </VBox>
          </Box>
        </VBox>
    )
  }
})
