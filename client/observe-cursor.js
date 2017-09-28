import { Tracker } from 'meteor/tracker'
import { action } from 'mobx'
import forEach from 'lodash.foreach'
import isUndefined from 'lodash.isundefined'

let createState = function(name, document) {
    if (isUndefined(name)) {
        return document
    }

    return new name(document._id, document)
}

export default (actionPrefix = '', observableArray, handle, cursor, loading, observerState) => {
    if (handle.ready()) {
        // initially fetch all documents and store them in the observable array
        Tracker.nonreactive(() => {
            action(`${actionPrefix}: initial fetch`, allDocs => {
                if (isUndefined(observerState)) {
                    observableArray.replace(allDocs)
                } else {
                    observableArray.clear()
                    forEach(allDocs, d => {
                        observableArray.push(createState(observerState, d))
                    })
                }

                loading = false
            })(cursor.fetch())
        })

        // observe changes after initial fetch
        cursor.observe({
            // _suppress_initial suppresses addedAt callback for documents initially fetched
            _suppress_initial: true,
            addedAt: action(`${actionPrefix}: document added`, (document, atIndex) => {
                console.log('something was added: ' + actionPrefix)
                observableArray.splice(atIndex, 0, createState(observerState, document))
            }),
            changedAt: action(`${actionPrefix}: document changed`, (newDocument, oldDocument, atIndex) => {
                console.log('something was changed: ' + actionPrefix)
                if (!isUndefined(observerState)) {
                    //we have singleton with an array of prototypes = observableArray = [observerState, observerState, ...]
                    observableArray[atIndex].updateState(newDocument)
                } else {
                    //singleton without prototypes/observerState associated
                    observableArray.splice(atIndex, 1, newDocument)
                }
            }),
            removedAt: action(`${actionPrefix}: document removed`, (oldDocument, atIndex) => {
                console.log('something was removed: ' + actionPrefix)
                observableArray.splice(atIndex, 1)
            }),
            movedTo: action(`${actionPrefix}: document moved`, (document, fromIndex, toIndex) => {
                observableArray.splice(fromIndex, 1)
                observableArray.splice(toIndex, 0, createState(observerState, document))
            })
        })
    } else {
        action(`${actionPrefix}: initialized`, () => {
            observableArray.clear()
        })()
    }
}
