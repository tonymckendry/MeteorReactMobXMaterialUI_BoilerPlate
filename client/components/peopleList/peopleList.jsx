import React from 'react'
import { observer } from 'mobx-react'
import { Page, Box, VBox, Center } from 'react-layout-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Subheader from 'material-ui/Subheader'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import FlatButton from 'material-ui/FlatButton'
import Close from 'material-ui/svg-icons/navigation/close'
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import { PeopleState } from '../../directory/singletons'
import { PersonaTheme } from '../theme/theme'

const PeopleList = ({ height }) => {
    return (
        <Page>
            <FloatingActionButton
                onClick={() => {
                    PeopleState.setPanelOpen(true)
                }}
                style={{ position: 'absolute', bottom: 20, right: 20 }}>
                <ContentAdd />
            </FloatingActionButton>
            <ReactCSSTransitionGroup transitionName="example">
                {PeopleState.panelOpen ? (
                    <div className="panel" style={{ height: height - 64, marginTop: 64 }}>
                        <Subheader>Basic Info</Subheader>
                        <Paper>
                            <Center column>
                                <Box justifyContent="space-between" style={{ width: '80vw' }}>
                                    <TextField
                                        onChange={(evt, val) => {
                                            PeopleState.updateForm('firstName', val)
                                        }}
                                        floatingLabelText="First Name"
                                        style={{ width: '35vw' }}
                                    />
                                    <TextField
                                        onChange={(evt, val) => {
                                            PeopleState.updateForm('lastName', val)
                                        }}
                                        floatingLabelText="Last Name"
                                        style={{ width: '35vw' }}
                                    />
                                </Box>
                                <TextField
                                    onChange={(evt, val) => {
                                        PeopleState.updateForm('address', val)
                                    }}
                                    floatingLabelText="Address"
                                    style={{ width: '80vw' }}
                                />
                                <TextField
                                    onChange={(evt, val) => {
                                        PeopleState.updateForm('address2', val)
                                    }}
                                    floatingLabelText="Address 2"
                                    style={{ width: '80vw' }}
                                />
                                <Box justifyContent="space-between" style={{ width: '80vw' }}>
                                    <TextField
                                        onChange={(evt, val) => {
                                            PeopleState.updateForm('city', val)
                                        }}
                                        floatingLabelText="City"
                                        style={{ width: '35vw' }}
                                    />
                                    <TextField
                                        onChange={(evt, val) => {
                                            PeopleState.updateForm('state', val)
                                        }}
                                        floatingLabelText="State"
                                        style={{ width: '35vw' }}
                                    />
                                </Box>
                                <Box justifyContent="space-between" style={{ width: '80vw' }}>
                                    <TextField
                                        onChange={(evt, val) => {
                                            PeopleState.updateForm('country', val)
                                        }}
                                        floatingLabelText="Country"
                                        style={{ width: '35vw' }}
                                    />
                                    <TextField
                                        onChange={(evt, val) => {
                                            PeopleState.updateForm('zip', val)
                                        }}
                                        floatingLabelText="Postal Code"
                                        style={{ width: '35vw' }}
                                    />
                                </Box>
                                <Box justifyContent="space-between" style={{ width: '80vw' }}>
                                    <TextField
                                        onChange={(evt, val) => {
                                            PeopleState.updateForm('dob', val)
                                        }}
                                        floatingLabelText="Date of Birth"
                                        style={{ width: '35vw' }}
                                    />
                                    <TextField
                                        onChange={(evt, val) => {
                                            PeopleState.updateForm('phone', val)
                                        }}
                                        floatingLabelText="Phone #"
                                        style={{ width: '35vw' }}
                                    />
                                </Box>
                            </Center>
                        </Paper>
                        <Subheader>Status</Subheader>
                        <Paper>
                            <Box justifyContent="space-around">
                                <SelectField
                                    floatingLabelText="Reintegration/Living Status"
                                    style={{ width: '35vw' }}
                                    value={PeopleState.newPersonForm.reintegration}
                                    onChange={(event, key, payload) => {
                                        PeopleState.updateForm('reintegration', payload)
                                    }}>
                                    <MenuItem primaryText="Street" value="street" />
                                    <MenuItem primaryText="Masana" value="masana" />
                                    <MenuItem primaryText="Family Home" value="family home" />
                                    <MenuItem primaryText="Jail" value="jail" />
                                    <MenuItem primaryText="Deceased" value="deceased" />
                                </SelectField>
                                <SelectField
                                    floatingLabelText="Education Level"
                                    value={PeopleState.newPersonForm.education}
                                    style={{ width: '35vw' }}
                                    onChange={(event, key, payload) => {
                                        PeopleState.updateForm('education', payload)
                                    }}>
                                    <MenuItem primaryText="None" value="none" />
                                    <MenuItem primaryText="K-3rd Grade" value="k-3" />
                                    <MenuItem primaryText="4th-7th Grade" value="4-7" />
                                    <MenuItem primaryText="8th-12th Grade" value="8-12" />
                                </SelectField>
                            </Box>
                            <Box justifyContent="space-around">
                                <SelectField
                                    floatingLabelText="HIV Status"
                                    value={PeopleState.newPersonForm.health}
                                    style={{ width: '35vw' }}
                                    onChange={(event, key, payload) => {
                                        console.log(payload)
                                        PeopleState.updateForm('health', payload)
                                    }}>
                                    <MenuItem primaryText="HIV Negative" value="negative" />
                                    <MenuItem primaryText="HIV Positive" value="positive" />
                                    <MenuItem primaryText="Unknown" value="unknown" />
                                </SelectField>
                            </Box>
                        </Paper>
                        <Center style={{ marginTop: 10 }}>
                            <FlatButton label="Submit" onClick={PeopleState.submitForm} backgroundColor={PersonaTheme.palette.accent2Color} labelStyle={{ color: 'white' }} />
                        </Center>
                    </div>
                ) : null}
            </ReactCSSTransitionGroup>
        </Page>
    )
}

PeopleList.propTypes = {
    height: React.PropTypes.number.isRequired
}

export default observer(PeopleList)
