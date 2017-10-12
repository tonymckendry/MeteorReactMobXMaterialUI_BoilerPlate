import { Meteor } from 'meteor/meteor'
import autorun from 'meteor/space:tracker-mobx-autorun'

import observe from '../../observe-cursor'

class SubscriptionState {
    handles = {
        users: {}
    }
}

const singleton = new SubscriptionState()
export default singleton

if (Meteor.isClient) {
    Meteor.startup(() => {
        // singleton.getShifts.start()
        singleton.handles.users = Meteor.subscribe('users')
    })
}
