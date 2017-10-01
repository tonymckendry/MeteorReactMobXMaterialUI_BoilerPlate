import { computed, observable, action, autorun } from 'mobx'
import { Meteor } from 'meteor/meteor'
import _ from 'lodash'
import observe from '../../observe-cursor'

import { SubscriptionState } from '../../directory/singletons'
import { Person } from '../../directory/prototypes'
import { People } from '../../../imports/api/people/people'

class PeopleState {
    @observable allPeople = []

    @observable panelOpen = false
    @observable showDetail = false
    @observable personToDetail

    @action
    setPanelOpen = open => {
        this.panelOpen = open
    }

    @action
    setShowDetail = show => {
        console.log('show detail')
        this.showDetail = show
    }

    @action
    setPersonToDetail = person => {
        this.personToDetail = person
        this.showDetail = true
    }

    @observable
    newPersonForm = {
        firstName: '',
        lastName: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        country: '',
        zip: '',
        dob: '',
        phone: '',
        reintegration: '',
        education: '',
        health: ''
    }

    @action
    updateForm = (field, value) => {
        this.newPersonForm[field] = value
    }

    @action
    resetForm = () => {
        this.newPersonForm = {
            firstName: '',
            lastName: '',
            address: '',
            address2: '',
            city: '',
            state: '',
            country: '',
            zip: '',
            dob: '',
            phone: '',
            reintegration: '',
            education: '',
            health: ''
        }
    }

    @action
    submitForm = () => {
        let newPerson = {
            info: {
                firstName: this.newPersonForm.firstName,
                lastName: this.newPersonForm.lastName,
                address1: this.newPersonForm.address,
                address2: this.newPersonForm.address2,
                city: this.newPersonForm.city,
                state: this.newPersonForm.state,
                country: this.newPersonForm.country,
                postalCode: this.newPersonForm.zip,
                phoneNumber: this.newPersonForm.phone,
                dob: this.newPersonForm.dob
            },
            status: { reintegration: this.newPersonForm.reintegration, education: this.newPersonForm.education, health: this.newPersonForm.health },
            comments: []
        }
        Meteor.call('createNewPerson', newPerson, err => {
            if (err) {
                console.log(err)
            } else {
                this.resetForm()
                this.setPanelOpen(false)
            }
        })
    }
}

const singleton = new PeopleState()
export default singleton

if (Meteor.isClient) {
    Meteor.startup(() => {
        Tracker.autorun(function() {
            if (Meteor.user() && SubscriptionState.handles.people.ready()) {
                let cursor = People.find({})
                observe('People', singleton.allPeople, SubscriptionState.handles.people, cursor, singleton.loading, Person)
            }
        })
    })
}
