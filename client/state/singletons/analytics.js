import { computed, observable, action, autorun } from 'mobx'
import { Meteor } from 'meteor/meteor'
import _ from 'lodash'
import observe from '../../observe-cursor'
import PersonStatus from '../../constants/status'
import OperatorStatus from '../../constants/operator'

//which cursors do we need to bring in? - People and History?
//how are we going to handle multiple queries?

class Analytics {
    @observable
    query = {
        time: '',
        queries: {
            q1: {
                cat: '',
                op: '',
                sub: ''
            }
        }
    }

    @observable queryResults = {}

    @computed
    get queryResultsMessage() {
        // looking at this.queryResults so we can display nothing, message or results on UI.
        // it can be empty object = do nothing.  It can be a string = display message.
        //or it can be an array with some results or no results.
        if (this.queryResults.length === 0) {
            return 'There are zero results that match your search'
        } else if (this.queryResults.length > 0) {
            if (this.queryResults.length === 1) {
                //no s in results.  #detailboy
                return 'You have ' + this.queryResults.length + ' result'
            } else {
                return 'You have ' + this.queryResults.length + ' results'
            }
        } else if (!_.isUndefined(this.queryResults.string) && this.queryResults.string === true) {
            //string that is set in this.submitQUery
            return this.queryResults.message
        } else {
            //nothing.  Show nothing.
            return
        }
    }

    @computed
    get opValues() {
        let opValues = []
        switch (this.query.queries.q1.cat) {
            case PersonStatus.category.reint:
            case PersonStatus.category.health:
                opValues = [OperatorStatus.op.equal]
                break
            case PersonStatus.category.ed:
                opValues = Object.values(OperatorStatus.op)
                break
            default:
        }
        return opValues
    }
    @computed
    get subCat() {
        let subCatValues = []
        switch (this.query.queries.q1.cat) {
            case '':
                subCatValues = ['Select a Category']
                break
            case PersonStatus.category.reint:
                subCatValues = Object.values(PersonStatus.reint)
                break
            case PersonStatus.category.ed:
                subCatValues = Object.values(PersonStatus.ed)
                break
            case PersonStatus.category.health:
                subCatValues = Object.values(PersonStatus.health.HIV)
                break
            default:
        }
        return subCatValues
    }
    @action
    updateQuery = (field, value) => {
        switch (field) {
            case 'time':
                this.query.time = value
                break
            case 'cat':
                this.query.queries.q1.cat = value
                break
            case 'op':
                this.query.queries.q1.op = value
                break
            case 'sub':
                this.query.queries.q1.sub = value
                break
            default:
        }
    }

    @action
    clearQuery = () => {
        this.query.time = ''
        this.query.queries.q1.cat = ''
        this.query.queries.q1.ed = ''
        this.query.queries.q1.sub = ''
        //clear message/results as well
        this.queryResults = {}
    }

    @action
    submitQuery = () => {
        if (this.query.time === '') {
            this.queryResults = {
                string: true,
                message: 'Select a Time Frame to complete your search'
            }
        } else if (this.query.queries.q1.cat === '' || this.query.queries.q1.op === '' || this.query.queries.q1.sub === '') {
            this.queryResults = {
                string: true,
                message: 'Complete your query input to complete your search'
            }
        } else {
            Meteor.call('anQuery', this.query, (error, result) => {
                if (error) {
                    this.queryResults[string] = true
                    this.queryResults[message] = 'There was an error in your search, please try again'
                } else {
                    this.queryResults = result
                }
            })
        }
    }
}

const singleton = new Analytics()
export default singleton
