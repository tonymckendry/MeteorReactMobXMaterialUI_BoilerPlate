import { Meteor } from 'meteor/meteor'

Meteor.publish('users', function() {
    this.autorun(function(computation) {
        if (this.userId) {
            return Meteor.users.find({})
        } else {
            return this.ready()
        }
    })
})
