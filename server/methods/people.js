import { People } from '../../imports/api/people/people'

Meteor.methods({
    createNewPerson: newPerson => {
        People.insert(newPerson)
    },
    updatePerson: (personId, section, fields) => {
        let query = {}
        query[section] = fields
        People.update({ _id: personId }, { $set: query })
    },
    submitComment: (personId, commentText) => {
        let comment = { createdAt: new Date(), userId: this.userId, comment: commentText }
        People.update({ _id: personId }, { $push: { comments: comment } })
    }
})
