import React from 'react'
import { Center, Page, VBox, Box } from 'react-layout-components';
import LinearProgress from 'material-ui/LinearProgress';

export const Loading = React.createClass({
  displayName: 'Loading Screen',
  render(){
    return (
      <Page style={{'backgroundColor' : '#ECF0F1'}}>
      <Center
      column
      height="100%">
      <img style={{width: '66vw'}} src='images/loading.gif'/>
      <LinearProgress color='#94BA65' mode="indeterminate" style={{'width' : '75vw', backgroundColor: '#2790B0'}}/>
      </Center>
      </Page>
    );
  }
})
