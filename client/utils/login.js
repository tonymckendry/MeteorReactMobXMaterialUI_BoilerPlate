import { Meteor } from 'meteor/meteor';

App.Utils.login = {}

App.Utils.login.loginWithPassword = function(user, password) {
  Meteor.loginWithPassword(user, password, function(error){
    if (error) {
      Dispatch(App.Constants.Dispatch.login.fail)
      console.log(error)
    } else {
      Dispatch(App.Constants.Dispatch.login.success)
    }
  })
}

App.Utils.login.logout = function() {
  Meteor.logout()
}
