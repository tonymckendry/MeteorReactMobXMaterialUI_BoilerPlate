import { computed, observable, action, autorun } from 'mobx'
import { Meteor } from 'meteor/meteor'
import _ from 'lodash'

class UserState {
    @observable allUsers = []
    @observable loginError = false
    @observable loading = false
    @observable authenticated = false
    @observable currentUser = {}

    @observable usr = ''
    @observable pwd = ''

    @action
    setUsername = username => {
        this.usr = username
    }
    @action
    setPassword = password => {
        this.pwd = password
    }

    @action
    setUser = user => {
        this.currentUser = user
    }

    @action
    auth() {
        this.loading = true
        Meteor.loginWithPassword(this.usr, this.pwd, error => {
            if (error) {
                console.log(error)
                this.loginError(true)
                this.loading = false
            } else {
                this.allGood()
                // UserState.setUser(Meteor.user())
            }
        })
    }

    @action
    allGood() {
        this.authenticated = true
        this.error = false
        this.clear()
    }

    @action
    isAuthenticated(bool) {
        if (bool) {
            this.setUser(Meteor.user())
        }
        this.authenticated = bool
    }

    @action
    clear() {
        this.loading = false
        this.usr = ''
        this.pwd = ''
    }
}

const singleton = new UserState()
export default singleton
