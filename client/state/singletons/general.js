import { computed, observable, action, autorun } from 'mobx'
import { Meteor } from 'meteor/meteor'
import { AnState } from '../../directory/singletons'
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
        this.drawerOpen = false
        //reset query fields.  not sure if this is the best way to do this - TPasque
        AnState.clearQuery()
    }

    @observable drawerOpen = false

    @action
    toggleDrawer = () => {
        this.drawerOpen = !this.drawerOpen
    }
}

const singleton = new GeneralState()
export default singleton
