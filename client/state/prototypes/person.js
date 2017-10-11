import { computed, observable, action, autorun } from 'mobx'
import { Meteor } from 'meteor/meteor'
import _ from 'lodash'
import observe from '../../observe-cursor'

import { SubscriptionState } from '../../directory/singletons'
import { People } from '../../../imports/api/people/people'

class Person {
    constructor(id, person) {
        this.person = person
    }

    @action
    updateState = person => {
        this.person = person
    }

    @observable person
}

export default Person
