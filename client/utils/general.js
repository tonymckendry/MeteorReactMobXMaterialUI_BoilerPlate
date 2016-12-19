import { Meteor } from 'meteor/meteor';

App.Utils.general = {}

App.Utils.general.tabSelected = function(tabNumber) {
  console.log("TabNumber is: " + tabNumber)
  Dispatch(App.Constants.Dispatch.tab.selected, {tabId: tabNumber})
}
