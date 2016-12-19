import React from 'react'
import { Center, Page, VBox, Box } from 'react-layout-components';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';


export const Login = React.createClass({
  displayName: 'Login',
  _loginWithFacebook(){
    App.Utils.login.loginWithFacebook()
  },
  render(){
    return(
      <Page>
        <Center>
          <VBox style={{'marginTop' : '10%'}}>
            <VBox style={{'textAlign' : 'center'}}>
              <h1 style={{'marginBottom' : '5px'}}>
                NexGen Fantasy Sports
              </h1>
              <h3 style={{'marginTop' : '5px'}}>
                The Evolution in Fantasy Sports
              </h3>
            </VBox>
            <Divider style={{
              'backgroundColor' : "#e0e0e0",
              "width" : '500px',
              'marginBottom' : '10px'
            }}/>
            <VBox>
            <RaisedButton
              label='Login with Google'
              style={{
                'margin' : '10px auto',
                'width' : '250px',
              }}/>
            <RaisedButton
              label='Login with Facebook'
              backgroundColor='#415dae'
              labelStyle={{
                'color' : 'white',
                'fontWeight' : '300'
              }}
              style={{
                'margin' : '10px auto',
                'width' : '250px',
                'margin' : '0 auto',
                'color' : 'white'
              }}
              onClick={this._loginWithFacebook}/>
            </VBox>
            <Divider style={{
              'backgroundColor' : "#e0e0e0",
              "width" : '500px',
              'marginTop' : '20px'
            }}/>
            <VBox>
              <TextField
              floatingLabelText='Username'
              style={{'margin' : '0 auto'}}/>
              <TextField
              floatingLabelText='Password'
              style={{'margin' : '0 auto'}}/>
              <RaisedButton
              label='Login'
              style={{
                'width' : '250px',
                'margin' : '0 auto'
              }}
              primary/>
            </VBox>
          </VBox>
        </Center>
      </Page>

    )
  }
})
