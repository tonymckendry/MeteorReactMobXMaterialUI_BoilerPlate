import { Meteor } from 'meteor/meteor';

App.Utils.profile = {}

App.Utils.profile.createUser = function(username, email, password, verify, firstName, lastName, DOB, address, city, state, zip) {
  let noCapsUsername = username.toLowerCase()
  let noCapsEmail = email.toLowerCase()
  console.log('CREATE USER')
  let profile = {}
  profile.firstName = firstName
  profile.lastName = lastName
  profile.address = {
    street: address,
    city: city,
    state: state,
    zip: zip
  }
  profile.DOB = DOB
  profile.displayUsername = username
    options = {
      username: noCapsUsername,
      email: noCapsEmail,
      password: password,
      profile: profile
    }
  Accounts.createUser(options, function(err){
    console.log('CREATING USER')
    if (err) {
      throw new Meteor.Error('User creation failed')
      console.log(err)
    } else {
      Meteor.loginWithPassword(options.username, options.password, function(error){
        console.log('logging in')
        if (error) {
          Dispatch(App.Constants.Dispatch.login.fail)
          console.log(error)
        } else {
          Dispatch(App.Constants.Dispatch.hideCreateProfile).then(Dispatch(App.Constants.Dispatch.login.success))
        }
      })
    }
  })
}
