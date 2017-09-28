import { Meteor } from 'meteor/meteor'
import { People } from '../people'

Meteor.publish('people', function() {
    this.autorun(function(computation) {
        if (this.userId) {
            return People.find({})
        } else {
            return this.ready()
        }
    })
})
