import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Main } from './components/main.jsx'

if (Meteor.isClient) {
  Meteor.startup(()=>{
    injectTapEventPlugin()

    ReactDOM.render(<Main />, document.getElementById("render-target"));

    //Meteor.subscribe()

    // Tracker.autorun(function(){
      //subs ready
    // })
  })
}
