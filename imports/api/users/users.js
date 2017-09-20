import { SimpleSchema } from 'meteor/aldeed:simple-schema'

let Schema = {}

Schema.UserProfile = new SimpleSchema({
    isAdmin: {
        type: Boolean,
        label: 'admin or general user',
        defaultValue: false
    },
    firstName: {
        type: String,
        label: 'first name'
    },
    lastName: {
        type: String,
        label: 'last name'
    }
})

Schema.User = new SimpleSchema({
    username: {
        type: String,
        label: 'username they will set up'
    },
    profile: {
        type: Schema.UserProfile,
        label: 'profile for user'
    }
})

Meteor.users.attachSchema(Schema.User)
