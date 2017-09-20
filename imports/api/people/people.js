import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

let InfoSchema = new SimpleSchema({
  firstName: {
      type: String,
      label: 'first name'
  },
  middleName: {
    type: String,
    label: 'first name',
    optional: true
  }
  lastName: {
      type: String,
      label: 'last name'
  },
  address: {
    type: String,
    label: 'address, street and number',
    optional: true
  },
  address2: {
    type: String,
    label: 'address, apartment number',
    optional: true
  },
  city: {
    type: String,
    label: 'city person lives in',
    optional: true
  },
  state: {
    type: String,
    label: 'state person lives in',
    optional: true
  },
  country: {
    type: String,
    label: 'country person lives in',
    optional: true
  },
  postalCode: {
    type: String,
    label: "String, bc example is 1110 Maputo",
    optional: true
  },
  phoneNumber: {
    type: Number,
    label: "Phone number for person",
    optional: true
  },
  dob: {
    type: Date,
    label: "date of birth",
    optional: true
  }
})

let HealthSchema = new SimpleSchema({
  HIV:{
    type: String,
    label: 'HIV Positive, Negative, or Unknown',
    defaultValue: "Unknown"
  }
})

let StatusSchema = new SimpleSchema({
  living: {
    type: String,
    label: 'constants of living status, unknown is an option'
  },
  education: {
    type: String,
    label: 'constants for education status'
  },
  health: {
    type: HealthSchema,
    label: 'Object of health status'
  }
})

let CommentSchema = new SimpleSchema({
  createdAt: {
    type: Date,
    label: 'date of comment'
  },
  userId: {
    type: String,
    label: 'person who made comment about user, mongo userId'
  },
  comment: {
    type String,
    label: 'comment'
  }
})

let PeopleSchema = new SimpleSchema({
  info: {
    type: InfoSchema,
    label: 'basic information about person',
  },
  status: {
    type: StatusSchema,
    label: "status for person"
  },
  comments: {
    type: [CommentSchema],
    label: 'array of comments about person, input by users/admin',
    optional: true
  }
})

export const People = new Mongo.Collection('people')
People.attachSchema(PeopleSchema)
