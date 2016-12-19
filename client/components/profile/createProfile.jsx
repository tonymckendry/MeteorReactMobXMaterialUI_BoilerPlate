import React from 'react'
import { Center, Page, VBox, Box } from 'react-layout-components';
import { Action, Dispatch, Register, State } from 'meteor/meteorflux:meteorflux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import { Loading } from '../loading/loading'

const styles = {
  headline: {
    fontSize: 24,
    margin: '0 auto',
    marginBottom: 12,
    marginTop: 12,
    fontWeight: 400,
    backgroundColor: '#2790B0',
    color: 'white',
    width: '100vw',
    height: '50px',
    paddingTop: '20px',
    textAlign: 'center',
    boxShadow: "3px 3px 5px rgba(0,0,0,.4)"
  },
};


const states = [
'AK','AR','CA','CO','CT','FL','GA','IL','IN','KS','KY','ME','MD','MA','MI','MN','MS','MO','NE','NH','NJ','NM','NY','NC',
'ND','OH','OK','OR','PA','RI','SC','SD','TN','UT','VT','VA','WV','WI','WY'
]

let months = [
  {name: 'January', count: 1},
  {name: 'February', count: 2},
  {name: 'March', count: 3},
  {name: 'April', count: 4},
  {name: 'May', count: 5},
  {name: 'June', count: 6},
  {name: 'July', count: 7},
  {name: 'August', count: 8},
  {name: 'September', count: 9},
  {name: 'October', count: 10},
  {name: 'November', count: 11},
  {name: 'December', count: 12}
  ]

let days = [
  1,2,3,4,5,6,7,8,9,10,
  11,12,13,14,15,16,17,18,19,20,
  21,22,23,24,25,26,27,28,29,30,31
  ]

let selectedState = ''

export const CreateProfile = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return{
      checking: State.get(App.Constants.State.login.checking),
      selectedState: State.get(App.Constants.State.login.selectedState),
      usernameBlank: State.get(App.Constants.State.login.usernameBlank),
      usernameTaken: State.get(App.Constants.State.login.usernameTaken),
      firstNameBlank: State.get(App.Constants.State.login.firstNameBlank),
      lastNameBlank: State.get(App.Constants.State.login.lastNameBlank),
      addressBlank: State.get(App.Constants.State.login.addressBlank),
      cityBlank: State.get(App.Constants.State.login.cityBlank),
      stateBlank: State.get(App.Constants.State.login.stateBlank),
      zipBlank: State.get(App.Constants.State.login.zipBlank),
      emailBlank: State.get(App.Constants.State.login.emailBlank),
      passwordBlank: State.get(App.Constants.State.login.passwordBlank),
      verifyBlank: State.get(App.Constants.State.login.verifyBlank),
      emailTaken: State.get(App.Constants.State.login.emailTaken),
      verifyNoMatch: State.get(App.Constants.State.login.verifyNoMatch),
      dateError: State.get(App.Constants.State.login.dateError),
    }
  },
  _username(){
    if(this.data.usernameBlank == true){
      return (
        <TextField
        errorText='Please choose a username'
        floatingLabelText='Choose a username'
        style={{'margin' : '0 auto'}}
        ref='username'/>
      )
    }
    else if(this.data.usernameTaken == true){
      return (
        <TextField
        errorText='Username is taken'
        floatingLabelText='Choose a username'
        style={{'margin' : '0 auto'}}
        ref='username'/>
      )
    } else {
      return (
        <TextField
        floatingLabelText='Choose a username'
        style={{'margin' : '0 auto'}}
        ref='username'/>
      )
    }
  },
  _firstName(){
    if(this.data.firstNameBlank == true){
      return <TextField
              errorText='First name required'
              floatingLabelText='First name'
              style={{'margin' : '0 auto'}}
              ref='firstName'/>
    } else {
      return <TextField
              floatingLabelText='First name'
              style={{'margin' : '0 auto'}}
              ref='firstName'/>
    }
  },
  _lastName(){
    if(this.data.lastNameBlank == true){
      return (
        <TextField
        errorText='Last name required'
        floatingLabelText='Last name'
        style={{'margin' : '0 auto'}}
        ref='lastName'/>
      )
    } else {
      return (
        <TextField
        floatingLabelText='Last name'
        style={{'margin' : '0 auto'}}
        ref='lastName'/>
      )
    }
  },
  _address(){
    if(this.data.addressBlank == true){
      return (
        <TextField
        errorText='Street Address required'
        floatingLabelText='Street Address'
        style={{'margin' : '0 auto'}}
        ref='address'/>
      )
    } else {
      return (
        <TextField
        floatingLabelText='Street Address'
        style={{'margin' : '0 auto'}}
        ref='address'/>
      )
    }
  },
  _city(){
    if(this.data.cityBlank == true){
      return (
        <TextField
        errorText='City required'
        floatingLabelText='City'
        style={{'margin' : '0 auto'}}
        ref='city'/>
      )
    } else {
      return (
        <TextField
        floatingLabelText='City'
        style={{'margin' : '0 auto'}}
        ref='city'/>
      )
    }
  },
  _DOB(){
    let month = <TextField ref='month' type='number' errorText={'*Must be 18'} style={{margin: '0 auto', width: '25%'}} errorStyle={{color: '#B7B7B7'}} floatingLabelText='Month'/>
    let day = <TextField ref='day' type='number' errorText={' '} style={{margin: '0 auto', width: '25%'}} errorStyle={{color: '#B7B7B7'}} floatingLabelText='Day'/>
    let year = <TextField ref='year' type='number' errorText={'ex. 1/1/1990'} style={{margin: '0 auto', width: '30%'}} errorStyle={{color: '#B7B7B7'}}  floatingLabelText='Year'/>
    if (this.data.dateError) {
      month = <TextField ref='month' type='number' errorText={'Invalid Date'} style={{margin: '0 auto', width: '25%'}} floatingLabelText='Month'/>
      day = <TextField ref='day' type='number' errorText={' '} style={{margin: '0 auto', width: '25%'}} floatingLabelText='Day'/>
      year = <TextField ref='year' type='number' errorText={'ex. 1/1/1990'} style={{margin: '0 auto', width: '30%'}}  floatingLabelText='Year'/>
    }
    return (
      <Box style={{width: '257px', margin: 'auto'}}>
        {month}
        <span style={{marginTop: '40px', fontSize: '1.5em', color: '#B7B7B7'}}>/</span>
        {day}
        <span style={{marginTop: '40px', fontSize: '1.5em', color: '#B7B7B7'}}>/</span>
        {year}
      </Box>
    )
  },
  _state(){
    if(this.data.stateBlank == true){
      return (
        <SelectField ref='state' errorText={'Please choose a state *Some States are not allowed'} style={{margin: 'auto'}} value={this.data.selectedState} onChange={this.handleStateSelect} floatingLabelText='State'>
          {states.map((s)=>{
            return <MenuItem primaryText={s} value={s}/>
          })}
        </SelectField>
      )
    } else {
      return (
        <SelectField ref='state' errorText={'*Some States are not allowed'} style={{margin: 'auto'}} errorStyle={{color: '#B7B7B7'}} value={this.data.selectedState} onChange={this.handleStateSelect} floatingLabelText='State'>
          {states.map((s)=>{
            return <MenuItem primaryText={s} value={s}/>
          })}
        </SelectField>
      )
    }
  },
  _zip(){
    if(this.data.zipBlank == true){
      return (
        <TextField
        errorText='ZIP code required'
        floatingLabelText='ZIP Code'
        style={{'margin' : '0 auto'}}
        ref='zip'/>
      )
    } else {
      return (
        <TextField
        floatingLabelText='ZIP Code'
        style={{'margin' : '0 auto'}}
        ref='zip'/>
      )
    }
  },
  _email(){
    if(this.data.emailBlank == true){
      return (
        <TextField
        errorText='Email address required'
        floatingLabelText='Enter email address'
        style={{'margin' : '0 auto'}}
        ref='email'/>
      )
    }
    else if(this.data.emailTaken == true){
      return (
        <TextField
        errorText='Account already exists with this email address'
        floatingLabelText='Enter email address'
        style={{'margin' : '0 auto'}}
        ref='email'/>
      )
    } else {
      return (
        <TextField
        floatingLabelText='Enter email address'
        style={{'margin' : '0 auto'}}
        ref='email'/>
      )
    }
  },
  _password(){
    if(this.data.passwordBlank == true){
      return (
        <TextField
        errorText='Please choose a password'
        floatingLabelText='Choose a password'
        style={{'margin' : '0 auto'}}
        ref='password'
        type='password'/>
      )
    }
    if(this.data.verifyNoMatch == true){
      return (
        <TextField
        errorText="Passwords don't match"
        floatingLabelText='Choose a password'
        style={{'margin' : '0 auto'}}
        ref='password'
        type='password'/>
      )
    } else {
      return (
        <TextField
        floatingLabelText='Choose a password'
        style={{'margin' : '0 auto'}}
        ref='password'
        type='password'/>
      )
    }
  },
  _verify(){
    if(this.data.verifyBlank == true){
      return (
        <TextField
        errorText='Please choose a password'
        floatingLabelText='Verify password'
        style={{'margin' : '0 auto'}}
        ref='verify'
        type='password'/>
      )
    }
    if(this.data.verifyNoMatch == true){
      return (
        <TextField
        errorText="Passwords don't match"
        floatingLabelText='Verify password'
        style={{'margin' : '0 auto'}}
        ref='verify'
        type='password'/>
      )
    } else {
      return (
        <TextField
        floatingLabelText='Verify password'
        style={{'margin' : '0 auto'}}
        ref='verify'
        type='password'/>
      )
    }
  },
  handleStateSelect(event, index, value){
    Dispatch(App.Constants.Dispatch.login.stateSelected, {state: value})
    console.log('happened')
    console.log(this.data.selectedState)
  },
  render(){
    console.log(this.data.selectedState)
    if (this.data.checking === true) {
      return (
        <Loading/>
      )
    }
    return(
      <VBox style={{'fontFamily' : 'sans-serif'}}>
        <h2 style={styles.headline}>Create your profile</h2>
        <form onSubmit={this._handleCreateProfile}>
          <VBox>
            {this._firstName()}
            {this._lastName()}
            {this._DOB()}
            {this._email()}
            {this._username()}
            {this._password()}
            {this._verify()}
            {this._address()}
            {this._city()}
            {this._state()}
            {this._zip()}
            <Checkbox
              label="I agree to the rules and regulations"
              style={{margin: '0 auto', marginTop: '30px', width: '257px'}}
              ref='agree'/>
            <RaisedButton
            label='Done'
            backgroundColor = '#2790B0'
            labelStyle={{'color' : '#ECF0F1'}}
            style={{
              'width' : '250px',
              'margin' : '25px auto',
              'color' : 'white'
            }}
            type='submit'/>
          </VBox>
        </form>
      </VBox>
    )
  },
  _handleCreateProfile(evt){
    let noCapsEmail = this.refs.email.getValue().toLowerCase()
    let noCapsUsername = this.refs.username.getValue().toLowerCase()
    evt.preventDefault()
    let error = false
    if (this.refs.username.getValue() == '') {
      //username not entered
      error = true
      Dispatch(App.Constants.Dispatch.login.usernameBlank)
    } else {
      Dispatch(App.Constants.Dispatch.login.username)
    }
    if (this.refs.firstName.getValue() == '') {
      //username not entered
      error = true
      Dispatch(App.Constants.Dispatch.login.firstNameBlank)
    } else {
      Dispatch(App.Constants.Dispatch.login.firstName)
    }
    if (this.refs.lastName.getValue() == '') {
      //username not entered
      error = true
      Dispatch(App.Constants.Dispatch.login.lastNameBlank)
    } else {
      Dispatch(App.Constants.Dispatch.login.lastName)
    }
    if (this.refs.address.getValue() == '') {
      //username not entered
      error = true
      Dispatch(App.Constants.Dispatch.login.addressBlank)
    } else {
      Dispatch(App.Constants.Dispatch.login.address)
    }
    if (this.refs.city.getValue() == '') {
      //username not entered
      error = true
      Dispatch(App.Constants.Dispatch.login.cityBlank)
    } else {
      Dispatch(App.Constants.Dispatch.login.city)
    }
    if (this.data.selectedState == '') {
      //username not entered
      error = true
      Dispatch(App.Constants.Dispatch.login.stateBlank)
    } else {
      Dispatch(App.Constants.Dispatch.login.state)
    }
    if (this.refs.zip.getValue() == '') {
      //username not entered
      error = true
      Dispatch(App.Constants.Dispatch.login.zipBlank)
    } else {
      Dispatch(App.Constants.Dispatch.login.zip)
    }
    if (noCapsEmail == '' || noCapsEmail.indexOf('@') < 0 || noCapsEmail.indexOf('.') < 0) {
      //username not entered
      error = true
      Dispatch(App.Constants.Dispatch.login.emailBlank)
    } else {
      Dispatch(App.Constants.Dispatch.login.email)
    }
    if (this.refs.password.getValue() == '') {
      //username not entered
      error = true
      Dispatch(App.Constants.Dispatch.login.passwordBlank)
    } else {
      Dispatch(App.Constants.Dispatch.login.password)
    }
    if (this.refs.verify.getValue() == '') {
      //username not entered
      error = true
      Dispatch(App.Constants.Dispatch.login.verifyBlank)
    } else {
      Dispatch(App.Constants.Dispatch.login.verify)
    }
    if (!(this.refs.month.getValue() > 0 && this.refs.month.getValue() < 13) || !(this.refs.day.getValue() > 0 && this.refs.day.getValue() < 32) || this.refs.year.getValue().length !== 4) {
      //username not entered
      error = true
      Dispatch(App.Constants.Dispatch.login.dateError)
    } else {
      Dispatch(App.Constants.Dispatch.login.date)
    }
    if (Meteor.users.findOne({'username' : noCapsUsername}) !== undefined) {
      //username taken
      error = true
      Dispatch(App.Constants.Dispatch.login.usernameTaken)
    } else {
      Dispatch(App.Constants.Dispatch.login.usernameNotTaken)
    }
    if (Meteor.users.findOne({'emails.address' : noCapsEmail}) !== undefined) {
      //email already used
      error = true
      Dispatch(App.Constants.Dispatch.login.emailTaken)
    } else {
      Dispatch(App.Constants.Dispatch.login.emailNotTaken)
    }
    if (this.refs.password.getValue() !== this.refs.verify.getValue()) {
      //passwords dont match
      error = true
      Dispatch(App.Constants.Dispatch.login.verifyNoMatch)
    } else {
      Dispatch(App.Constants.Dispatch.login.verifyMatch)
    }
    if (error) {
      console.log('error found!!!!!!!')
      Dispatch(App.Constants.Dispatch.login.fail)
      return
    }
    let DOB = this.refs.month.getValue() + '/' + this.refs.day.getValue() + '/' + this.refs.year.getValue()
    Dispatch(App.Constants.Dispatch.login.checking)
    App.Utils.profile.createUser(
      this.refs.username.getValue(),
      this.refs.email.getValue(),
      this.refs.password.getValue(),
      this.refs.verify.getValue(),
      this.refs.firstName.getValue(),
      this.refs.lastName.getValue(),
      DOB,
      this.refs.address.getValue(),
      this.refs.city.getValue(),
      this.data.selectedState,
      this.refs.zip.getValue())
  },
})
