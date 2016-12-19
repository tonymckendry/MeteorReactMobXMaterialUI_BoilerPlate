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
