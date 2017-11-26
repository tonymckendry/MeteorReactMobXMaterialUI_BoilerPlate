import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
    if (Meteor.users.find({ username: 'admin' }).count() == 0) {
        Accounts.createUser({ username: 'admin', password: 'password', email: 'admin@fakeEmail.com', profile: { firstName: 'Admin', lastName: 'User' } })
    }
})
