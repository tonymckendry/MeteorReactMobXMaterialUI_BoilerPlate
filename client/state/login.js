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
