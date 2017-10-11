import React from 'react'
import Subheader from 'material-ui/Subheader'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import { List, ListItem } from 'material-ui/List'
import { Center, Box } from 'react-layout-components'
import { observer } from 'mobx-react'

import { AnState, PeopleState } from '../../directory/singletons'
import PersonStatus from '../../constants/status'
import OperatorStatus from '../../constants/operator'
import { PersonaTheme } from '../theme/theme'

//make all of these constants that we pass in - category, operator, subs

const renderQueryResults = () => {
    if (AnState.queryResults.length) {
        return (
            <List style={{ backgroundColor: 'white' }}>
                {AnState.queryResults.map(p => {
                    return (
                        <div>
                            <ListItem
                                leftAvatar={
                                    <Avatar>
                                        {p.info.firstName[0]}
                                        {p.info.lastName[0]}
                                    </Avatar>
                                }
                                primaryText={p.info.firstName + ' ' + p.info.lastName}
                                secondaryText={p.status.reintegration}
                            />
                            <Divider />
                        </div>
                    )
                })}
            </List>
        )
    }
}

const Analytics = ({ height }) => {
    return (
        <div className="panel" style={{ height: height }}>
            <Subheader>Select Your Time Frame</Subheader>
            <Paper>
                <Box justifyContent="space-around">
                    <SelectField
                        floatingLabelText="Time Frame"
                        style={{ width: '35vw' }}
                        value={AnState.query.time}
                        onChange={(event, key, payload) => {
                            AnState.updateQuery('time', payload)
                        }}
                    >
                        <MenuItem primaryText={'All Past'} value={'All Past'} />
                    </SelectField>
                </Box>
            </Paper>
            <Subheader>Build Your Query</Subheader>
            <Paper>
                <Box justifyContent="space-around">
                    <h1 style={{ paddingLeft: 10, paddingRight: 10 }}>Q1</h1>
                    <SelectField
                        floatingLabelText="Category"
                        style={{ width: '35vw' }}
                        value={AnState.query.queries.q1.cat}
                        onChange={(event, key, payload) => {
                            AnState.updateQuery('cat', payload)
                        }}
                    >
                        <MenuItem primaryText={PersonStatus.category.reint} value={PersonStatus.category.reint} />
                        <MenuItem primaryText={PersonStatus.category.ed} value={PersonStatus.category.ed} />
                        <MenuItem primaryText={PersonStatus.category.health} value={PersonStatus.category.health} />
                    </SelectField>
                    <SelectField
                        floatingLabelText="Operator"
                        style={{ width: '35vw' }}
                        value={AnState.query.queries.q1.op}
                        onChange={(event, key, payload) => {
                            AnState.updateQuery('op', payload)
                        }}
                    >
                        {AnState.opValues.map(c => {
                            return <MenuItem primaryText={c} value={c} />
                        })}
                    </SelectField>
                    <SelectField
                        floatingLabelText="Sub Category"
                        style={{ width: '35vw' }}
                        value={AnState.query.queries.q1.sub}
                        onChange={(event, key, payload) => {
                            AnState.updateQuery('sub', payload)
                        }}
                    >
                        {AnState.subCat.map(c => {
                            return <MenuItem primaryText={c} value={c} />
                        })}
                    </SelectField>
                </Box>
            </Paper>
            <Center style={{ marginTop: 10 }}>
                <FlatButton label="Fetch Results" onClick={AnState.submitQuery} backgroundColor={PersonaTheme.palette.accent2Color} labelStyle={{ color: 'white' }} />
            </Center>
            <Center style={{ marginTop: 10 }}>
                <h2>{AnState.queryResultsMessage}</h2>
            </Center>
            {renderQueryResults()}
        </div>
    )
}

export default observer(Analytics)
