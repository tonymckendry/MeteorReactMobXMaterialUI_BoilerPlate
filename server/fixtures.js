import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
    if (Meteor.users.find({ username: 'mercantyle' }).count() == 0) {
        Accounts.createUser({ username: 'mercantyle', password: 'f0sh0', email: 'admin@mercantyle.com', profile: { firstName: 'Mercantyle', lastName: 'Admin', isAdmin: true } })
    }
})
