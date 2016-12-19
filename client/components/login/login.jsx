import React from 'react'
import { Center, Page, VBox, Box } from 'react-layout-components';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';


export const Login = React.createClass({
  displayName: 'Login',
  mixins: [ReactMeteorData],
  getMeteorData(){
      return{
          checking: State.get(App.Constants.State.login.checking)
      }
  },
  _loginWithFacebook(){
    App.Utils.login.loginWithFacebook()
  },
  _signup(){
    Dispatch(App.Constants.Dispatch.showCreateProfile)
  },
  render(){
    return(
      <Page>
        <Center>
          <VBox style={{'marginTop' : '10%'}}>
            <VBox style={{'textAlign' : 'center'}}>
              <h1 style={{'marginBottom' : '5px'}}>
                iVest
              </h1>
              <h3 style={{'marginTop' : '5px'}}>
                Some Tagline
              </h3>
            </VBox>
            <Divider style={{
              'backgroundColor' : "#e0e0e0",
              "width" : '500px',
              'marginBottom' : '10px'
            }}/>
            <VBox>
            <form onSubmit={this._loginWithPassword}>
               <VBox>
                 <TextField
                     floatingLabelText='Username'
                     ref='username'
                     style={{'margin' : '0 auto'}}/>
                 <TextField
                     ref='password'
                     floatingLabelText='Password'
                     style={{'margin' : '0 auto'}}
                     type='password'/>
                 <RaisedButton
                     label='Login'
                     style={{
                         'width' : '250px',
                         'margin' : '0 auto'
                     }}
                     type='submit'/>
                 </VBox>
               </form>
              <Divider style={{
                "width" : '40vw',
                margin: 'auto',
                'marginTop' : '20px'
              }}/>
              <RaisedButton
                label='Signup'
                style={{
                    'width' : '250px',
                    'margin' : '10px auto'
                }}
                onClick={this._signup}/>
            </VBox>
          </VBox>
        </Center>
      </Page>
    )
  },
  _loginWithPassword(evt){
      evt.preventDefault()
      console.log('logging in with password and supposedly dispatching')
      Dispatch(App.Constants.Dispatch.login.checking)
      App.Utils.login.loginWithPassword(this.refs.username.getValue(), this.refs.password.getValue())
    }
})
