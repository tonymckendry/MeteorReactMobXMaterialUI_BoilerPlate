import { People } from '../../imports/api/people/people'

Meteor.methods({
    createNewPerson: newPerson => {
        People.insert(newPerson)
    }
})
