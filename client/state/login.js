import { Meteor } from 'meteor/meteor';
import { Action, Dispatch, Register, State } from 'meteor/meteorflux:meteorflux';

State.modify(App.Constants.State.loggedIn, function(state=false){
  switch (Action.type()) {
    case App.Constants.Dispatch.login.success:
      console.log('login success')
      return true
      break;
    default:
      return state
  }
})

State.modify(App.Constants.State.login.selectedState, function(state=''){
  switch (Action.type()) {
    case App.Constants.Dispatch.login.stateSelected:
    console.log('got the dispatch')
    console.log(Action.payload())
      return Action.payload().state
    default:
      return state
  }
})

State.modify(App.Constants.State.login.usernameBlank, function(state=false){
  switch (Action.type()) {
    case App.Constants.Dispatch.login.usernameBlank:
    return true
    case App.Constants.Dispatch.login.username:
    return false
    default:
      return state
  }
})
State.modify(App.Constants.State.login.usernameTaken, function(state=false){
  switch (Action.type()) {
    case App.Constants.Dispatch.login.usernameTaken:
    return true
    case App.Constants.Dispatch.login.usernameNotTaken:
    return false
    default:
      return state
  }
})
State.modify(App.Constants.State.login.firstNameBlank, function(state=false){
  switch (Action.type()) {
    case App.Constants.Dispatch.login.firstNameBlank:
    return true
    case App.Constants.Dispatch.login.firstName:
    return false
    default:
      return state
  }
})
State.modify(App.Constants.State.login.lastNameBlank, function(state=false){
  switch (Action.type()) {
    case App.Constants.Dispatch.login.lastNameBlank:
    return true
    case App.Constants.Dispatch.login.lastName:
    return false
    default:
      return state
  }
})
State.modify(App.Constants.State.login.addressBlank, function(state=false){
  switch (Action.type()) {
    case App.Constants.Dispatch.login.addressBlank:
    return true
    case App.Constants.Dispatch.login.address:
    return false
    default:
      return state
  }
})
State.modify(App.Constants.State.login.cityBlank, function(state=false){
  switch (Action.type()) {
    case App.Constants.Dispatch.login.cityBlank:
    return true
    case App.Constants.Dispatch.login.city:
    return false
    default:
      return state
  }
})
State.modify(App.Constants.State.login.stateBlank, function(state=false){
  switch (Action.type()) {
    case App.Constants.Dispatch.login.stateBlank:
    return true
    case App.Constants.Dispatch.login.state:
    return false
    default:
      return state
  }
})
State.modify(App.Constants.State.login.zipBlank, function(state=false){
  switch (Action.type()) {
    case App.Constants.Dispatch.login.zipBlank:
    return true
    case App.Constants.Dispatch.login.zip:
    return false
    default:
      return state
  }
})
State.modify(App.Constants.State.login.emailBlank, function(state=false){
  switch (Action.type()) {
    case App.Constants.Dispatch.login.emailBlank:
    return true
    case App.Constants.Dispatch.login.email:
    return false
    default:
      return state
  }
})
State.modify(App.Constants.State.login.passwordBlank, function(state=false){
  switch (Action.type()) {
    case App.Constants.Dispatch.login.passwordBlank:
    return true
    case App.Constants.Dispatch.login.password:
    return false
    default:
      return state
  }
})
State.modify(App.Constants.State.login.verifyBlank, function(state=false){
  switch (Action.type()) {
    case App.Constants.Dispatch.login.verifyBlank:
    return true
    case App.Constants.Dispatch.login.verify:
    return false
    default:
      return state
  }
})
State.modify(App.Constants.State.login.emailTaken, function(state=false){
  switch (Action.type()) {
    case App.Constants.Dispatch.login.emailTaken:
    return true
    case App.Constants.Dispatch.login.emailNotTaken:
    return false
    default:
      return state
  }
})
State.modify(App.Constants.State.login.verifyNoMatch, function(state=false){
  switch (Action.type()) {
    case App.Constants.Dispatch.login.verifyNoMatch:
    return true
    case App.Constants.Dispatch.login.verifyMatch:
    return false
    default:
      return state
  }
})
State.modify(App.Constants.State.login.dateError, function(state=false){
  switch (Action.type()) {
    case App.Constants.Dispatch.login.dateError:
    return true
    case App.Constants.Dispatch.login.date:
    return false
    default:
      return state
  }
})
