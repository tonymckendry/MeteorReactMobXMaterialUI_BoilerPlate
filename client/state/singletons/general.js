import { computed, observable, action, autorun } from 'mobx'
import { Meteor } from 'meteor/meteor'
import _ from 'lodash'

class GeneralState {
    //**options**:
    //Dashboard
    //PeopleList
    //Analytics
    //Settings
    @observable appFunction = 'Dashboard'

    @action
    changeAppFunction = appFunc => {
        this.appFunction = appFunc
    }

    @observable drawerOpen = false

    @action
    toggleDrawer = () => {
        this.drawerOpen = !this.drawerOpen
    }
}

const singleton = new GeneralState()
export default singleton
