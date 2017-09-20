import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

let RecordSchema = new SimpleSchema({
    new: {
        type: String,
        label: 'new record'
    },
    old: {
        type: String,
        label: 'what the entry was directly before the new entry'
    }
})

let EntrySchema = new SimpleSchema({
    createdAt: {
        type: Date,
        label: 'date we created entry'
    },
    userId: {
        type: String,
        label: 'user/admin who created the history entry'
    },
    record: {
        type: RecordSchema,
        label: 'old and new record'
    }
})

let HistorySchema = new SimpleSchema({
    personId: {
        type: String,
        label: 'mongo ID from person the history is connected to'
    },
    history: {
        type: [EntrySchema],
        label: 'array of entries'
    }
})

export const History = new Mongo.Collection('history')
History.attachSchema(HistorySchema)
