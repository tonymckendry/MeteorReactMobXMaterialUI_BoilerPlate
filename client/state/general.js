import { Meteor } from 'meteor/meteor';
import { Action, Dispatch, Register, State } from 'meteor/meteorflux:meteorflux';

State.modify(App.Constants.State.selectedTab, function(state=1){
  switch (Action.type()) {
    case App.Constants.Dispatch.tab.selected:
      console.log('tab ' + Action.payload().tabId + ' was selected')
      return Action.payload().tabId
      break;
    default:
      return state
  }
})

State.set(App.Constants.State.showCreateProfile, function(state=false){
  switch (Action.type()) {
    case App.Constants.Dispatch.showCreateProfile:
      return true
      break;
      case App.Constants.Dispatch.hideCreateProfile:
      console.log('hide create profile')
      return false
    default:
      return state
  }
})
