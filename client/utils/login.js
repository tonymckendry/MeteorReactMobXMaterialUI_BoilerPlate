import { Meteor } from 'meteor/meteor';

App.Utils.login = {}

App.Utils.login.loginWithFacebook = function() {
  Meteor.loginWithFacebook({}, function(err){
    if (err) {
      throw new Meteor.Error('Facebook login failed')
    } else {
      Dispatch(App.Constants.Dispatch.login.success)
    }
  })
}
