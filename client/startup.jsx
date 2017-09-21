import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import injectTapEventPlugin from 'react-tap-event-plugin'
import _ from 'lodash'
import autorun from 'meteor/space:tracker-mobx-autorun'

import UserState from './state/singletons/users'

import { Main } from './components/main.jsx'

const onLoggedOut = autorun(() => {
    UserState.isAuthenticated(!_.isNull(Meteor.user()))
})

if (Meteor.isClient) {
    Meteor.startup(() => {
        // injectTapEventPlugin()
        onLoggedOut.start()

        ReactDOM.render(<Main />, document.getElementById('render-target'))

        //Meteor.subscribe()

        // Tracker.autorun(function(){
        //subs ready
        // })
    })
}
