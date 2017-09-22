import { computed, observable, action, autorun } from 'mobx'
import { Meteor } from 'meteor/meteor'
import _ from 'lodash'

class People {
    @observable panelOpen = false

    @action
    setPanelOpen = open => {
        this.panelOpen = open
    }
}

const singleton = new People()
export default singleton
