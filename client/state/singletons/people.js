import { computed, observable, action, autorun } from 'mobx'
import { Meteor } from 'meteor/meteor'
import _ from 'lodash'

class People {
    @observable allPeople = []

    @observable panelOpen = false

    @action
    setPanelOpen = open => {
        this.panelOpen = open
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
                address1: this.newPersonForm.address1,
                address2: this.newPersonForm.address2,
                city: this.newPersonForm.city,
                state: this.newPersonForm.state,
                country: this.newPersonForm.country,
                postalCode: this.newPersonForm.zip,
                phoneNumber: this.newPersonForm.phone,
                dob: this.newPersonForm.dob
            },
            status: { living: this.newPersonForm.living, education: this.newPersonForm.education, health: this.newPersonForm.health },
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

const singleton = new People()
export default singleton
