import { computed, observable, action, autorun } from 'mobx'
import { Meteor } from 'meteor/meteor'
import _ from 'lodash'
import observe from '../../observe-cursor'

import { SubscriptionState, UserState } from '../../directory/singletons'
import { Person } from '../../directory/prototypes'
import { People } from '../../../imports/api/people/people'

class PeopleState {
    @observable allPeople = []

    @observable panelOpen = false
    @observable showDetail = false
    @observable personToDetail

    @observable editSection
    @observable editFormFields

    @observable showCreateComment = false

    @observable commentText

    @action
    createNewComment = () => {
        this.showCreateComment = true
    }

    @action
    cancelComment = () => {
        this.showCreateComment = false
    }

    @action
    setCommentText = text => {
        this.commentText = text
    }

    @action
    setPanelOpen = open => {
        this.panelOpen = open
    }

    @action
    setPersonToDetail = person => {
        this.personToDetail = person
        this.showDetail = true
    }

    @action
    resetPersonToDetail = () => {
        this.personToDetail = undefined
        this.showDetail = false
    }

    @action
    setEditSection = section => {
        this.editSection = section
        this.editFormFields = {
            info: {
                firstName: this.personToDetail.person.info.firstName,
                lastName: this.personToDetail.person.info.lastName,
                address: this.personToDetail.person.info.address,
                address2: this.personToDetail.person.info.address2,
                city: this.personToDetail.person.info.city,
                state: this.personToDetail.person.info.state,
                country: this.personToDetail.person.info.country,
                zip: this.personToDetail.person.info.postalCode,
                dob: this.personToDetail.person.info.dob,
                phone: this.personToDetail.person.info.phoneNumber
            },
            status: {
                reintegration: this.personToDetail.person.status.reintegration,
                education: this.personToDetail.person.status.education,
                health: this.personToDetail.person.status.health
            }
        }
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

    @observable editForm = {}

    @action
    formEdit = (field, value) => {
        this.editFormFields[this.editSection][field] = value
    }

    @action
    saveEdit = () => {
        Meteor.call('updatePerson', this.personToDetail.person._id, this.editSection, this.editFormFields[this.editSection], err => {
            if (err) {
                console.log(err)
            } else {
                this.editSection = undefined
                this.editFormFields = undefined
            }
        })
    }

    @action
    submitComment = () => {
        Meteor.call('submitComment', this.personToDetail.person._id, this.commentText, Meteor.user()._id, err => {
            if (err) {
                console.log(err)
            } else {
                this.showCreateComment = false
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
if (Meteor.isClient) {
    Meteor.startup(() => {
        Tracker.autorun(function() {
            if (Meteor.user() && SubscriptionState.handles.users.ready()) {
                let cursor = Meteor.users.find({})
                console.log('user cursor')
                console.log(cursor)
                observe('Users', UserState.allUsers, SubscriptionState.handles.users, cursor, UserState.loading)
            }
        })
    })
}
