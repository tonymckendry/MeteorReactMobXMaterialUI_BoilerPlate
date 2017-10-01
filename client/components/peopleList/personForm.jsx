import React from 'react'
import Subheader from 'material-ui/Subheader'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import { Center, Box } from 'react-layout-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { observer } from 'mobx-react'

import { PeopleState } from '../../directory/singletons'
import PersonStatus from '../../constants/status'
import { PersonaTheme } from '../theme/theme'

const PersonForm = ({ height }) => {
    return (
        <ReactCSSTransitionGroup transitionName="example">
            {PeopleState.panelOpen ? (
                <div className="panel" style={{ height: height }}>
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
                                <MenuItem primaryText={PersonStatus.reint.streets} value={PersonStatus.reint.streets} />
                                <MenuItem primaryText={PersonStatus.reint.reintegrated} value={PersonStatus.reint.reintegrated} />
                                <MenuItem primaryText={PersonStatus.reint.center} value={PersonStatus.reint.center} />
                                <MenuItem primaryText={PersonStatus.reint.jail} value={PersonStatus.reint.jail} />
                                <MenuItem primaryText={PersonStatus.reint.altHousing} value={PersonStatus.reint.altHousing} />
                                <MenuItem primaryText={PersonStatus.reint.deceased} value={PersonStatus.reint.deceased} />
                            </SelectField>
                            <SelectField
                                floatingLabelText="Education Level"
                                value={PeopleState.newPersonForm.education}
                                style={{ width: '35vw' }}
                                onChange={(event, key, payload) => {
                                    PeopleState.updateForm('education', payload)
                                }}>
                                <MenuItem primaryText={PersonStatus.ed.one} value={PersonStatus.ed.one} />
                                <MenuItem primaryText={PersonStatus.ed.two} value={PersonStatus.ed.two} />
                                <MenuItem primaryText={PersonStatus.ed.three} value={PersonStatus.ed.three} />
                                <MenuItem primaryText={PersonStatus.ed.four} value={PersonStatus.ed.four} />
                                <MenuItem primaryText={PersonStatus.ed.five} value={PersonStatus.ed.five} />
                                <MenuItem primaryText={PersonStatus.ed.six} value={PersonStatus.ed.six} />
                                <MenuItem primaryText={PersonStatus.ed.seven} value={PersonStatus.ed.seven} />
                                <MenuItem primaryText={PersonStatus.ed.eight} value={PersonStatus.ed.eight} />
                                <MenuItem primaryText={PersonStatus.ed.nine} value={PersonStatus.ed.nine} />
                                <MenuItem primaryText={PersonStatus.ed.ten} value={PersonStatus.ed.ten} />
                                <MenuItem primaryText={PersonStatus.ed.eleven} value={PersonStatus.ed.eleven} />
                                <MenuItem primaryText={PersonStatus.ed.twelve} value={PersonStatus.ed.twelve} />
                                <MenuItem primaryText={PersonStatus.ed.a0} value={PersonStatus.ed.a0} />
                                <MenuItem primaryText={PersonStatus.ed.a1} value={PersonStatus.ed.a1} />
                                <MenuItem primaryText={PersonStatus.ed.a2} value={PersonStatus.ed.a2} />
                                <MenuItem primaryText={PersonStatus.ed.a3} value={PersonStatus.ed.a3} />
                                <MenuItem primaryText={PersonStatus.ed.none} value={PersonStatus.ed.none} />
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
                                <MenuItem primaryText={PersonStatus.health.HIV.positive} value={PersonStatus.health.HIV.positive} />
                                <MenuItem primaryText={PersonStatus.health.HIV.negative} value={PersonStatus.health.HIV.negative} />
                                <MenuItem primaryText={PersonStatus.health.HIV.unknown} value={PersonStatus.health.HIV.unknown} />
                            </SelectField>
                        </Box>
                    </Paper>
                    <Center style={{ marginTop: 10 }}>
                        <FlatButton label="Submit" onClick={PeopleState.submitForm} backgroundColor={PersonaTheme.palette.accent2Color} labelStyle={{ color: 'white' }} />
                    </Center>
                </div>
            ) : null}
        </ReactCSSTransitionGroup>
    )
}

export default observer(PersonForm)
