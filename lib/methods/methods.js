import { People } from '../../imports/api/people/people'

Meteor.methods({
    anQuery: stats => {
        //can we import our constants from client side to here???
        let name = stats.queries.q1.cat
        //need to get the status to lower case
        //constant is uppercase bc we display it that way on front end
        //name.toLowerCase() didn't work.
        switch (name) {
            case 'Reintegration':
                name = 'reintegration'
                break
            case 'Education':
                name = 'education'
                break
            case 'Health':
                name = 'health'
                break
            default:
        }
        name = 'status.' + name

        //set the operator
        let op = stats.queries.q1.op
        switch (op) {
            case 'Equal To':
                op = '$eq'
                break
            case 'Greater Than':
                op = '$gt'
                break
            case 'Greater Than or Equal To':
                op = '$gte'
                break
            case 'Less Than':
                op = '$lt'
                break
            case 'Less Than or Equal To':
                op = '$lte'
                break
            default:
        }

        //we have to dynamically build the mongodb query
        let value = stats.queries.q1.sub
        let query = {}
        let opSearch = {}
        opSearch[op] = value
        query[name] = opSearch
        return People.find(query).fetch()
    }
})
