import { Meteor } from 'meteor/meteor'
import autorun from 'meteor/space:tracker-mobx-autorun'

import observe from '../../observe-cursor'

import { PeopleState } from '../../directory/singletons'
// import {  } from '../../directory/prototypes'

class SubscriptionState {
    handles = {
        people: {}
    }
}

const singleton = new SubscriptionState()
export default singleton

if (Meteor.isClient) {
    Meteor.startup(() => {
        // singleton.getShifts.start()
        singleton.handles.people = Meteor.subscribe('people')
    })
}
