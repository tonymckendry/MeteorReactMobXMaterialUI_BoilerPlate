import React from 'react'
import Subheader from 'material-ui/Subheader'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import { Center, Box } from 'react-layout-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { observer } from 'mobx-react'
import Edit from 'material-ui/svg-icons/editor/mode-edit'

import { PeopleState } from '../../directory/singletons'
import PersonStatus from '../../constants/status'
import { PersonaTheme } from '../theme/theme'

let inputStyle = { color: 'transparent', textShadow: '0 0 0 black' }

const handleChange = (section, field, value) => {
    if (PeopleState.editSection == section) {
        PeopleState.formEdit(field, value)
    }
}

const PersonDetail = ({ height }) => {
    console.log(PeopleState.editSection)
    return (
        <ReactCSSTransitionGroup transitionName="example">
            {PeopleState.showDetail ? (
                <div className="panel" style={{ height: height }}>
                    {renderInfoSection()}
                    {renderStatusSection()}
                </div>
            ) : null}
        </ReactCSSTransitionGroup>
    )
}

export default observer(PersonDetail)

const renderIconButton = section => {
    if (PeopleState.editSection == section) {
        return <FlatButton label="Save" onClick={PeopleState.saveEdit} />
    }
    return (
        <IconButton
            onClick={() => {
                PeopleState.setEditSection(section)
            }}>
            <Edit />
        </IconButton>
    )
}

const renderInfoSection = () => {
    return (
        <div>
            <Subheader>
                <Center justifyContent="space-between">
                    <span>Basic Info</span> {renderIconButton('info')}
                </Center>
            </Subheader>
            <Paper>
                <Center column>
                    <Box justifyContent="space-between" style={{ width: '80vw' }}>
                        <TextField
                            onChange={(e, v) => {
                                handleChange('info', 'firstName', v)
                            }}
                            underlineShow={PeopleState.editSection === 'info'}
                            value={PeopleState.editSection === 'info' ? PeopleState.editFormFields.info.firstName : PeopleState.personToDetail.person.info.firstName}
                            floatingLabelText="First Name"
                            style={{ width: '35vw' }}
                            inputStyle={PeopleState.editSection !== 'info' ? inputStyle : null}
                        />
                        <TextField
                            onChange={(e, v) => {
                                handleChange('info', 'lastName', v)
                            }}
                            underlineShow={PeopleState.editSection === 'info'}
                            value={PeopleState.editSection === 'info' ? PeopleState.editFormFields.info.lastName : PeopleState.personToDetail.person.info.lastName}
                            floatingLabelText="Last Name"
                            style={{ width: '35vw' }}
                            inputStyle={PeopleState.editSection !== 'info' ? inputStyle : null}
                        />
                    </Box>
                    <TextField
                        onChange={(e, v) => {
                            handleChange('info', 'address', v)
                        }}
                        inputStyle={PeopleState.editSection !== 'info' ? inputStyle : null}
                        underlineShow={PeopleState.editSection === 'info'}
                        value={PeopleState.editSection === 'info' ? PeopleState.editFormFields.info.address : PeopleState.personToDetail.person.info.address}
                        floatingLabelText="Address"
                        style={{ width: '80vw' }}
                    />
                    <TextField
                        onChange={(e, v) => {
                            handleChange('info', 'address2', v)
                        }}
                        inputStyle={PeopleState.editSection !== 'info' ? inputStyle : null}
                        underlineShow={PeopleState.editSection === 'info'}
                        value={PeopleState.editSection === 'info' ? PeopleState.editFormFields.info.address2 : PeopleState.personToDetail.person.info.address2}
                        floatingLabelText="Address 2"
                        style={{ width: '80vw' }}
                    />
                    <Box justifyContent="space-between" style={{ width: '80vw' }}>
                        <TextField
                            onChange={(e, v) => {
                                handleChange('info', 'city', v)
                            }}
                            inputStyle={PeopleState.editSection !== 'info' ? inputStyle : null}
                            underlineShow={PeopleState.editSection === 'info'}
                            value={PeopleState.editSection === 'info' ? PeopleState.editFormFields.info.city : PeopleState.personToDetail.person.info.city}
                            floatingLabelText="City"
                            style={{ width: '35vw' }}
                        />
                        <TextField
                            onChange={(e, v) => {
                                handleChange('info', 'state', v)
                            }}
                            inputStyle={PeopleState.editSection !== 'info' ? inputStyle : null}
                            underlineShow={PeopleState.editSection === 'info'}
                            value={PeopleState.editSection === 'info' ? PeopleState.editFormFields.info.state : PeopleState.personToDetail.person.info.state}
                            floatingLabelText="State"
                            style={{ width: '35vw' }}
                        />
                    </Box>
                    <Box justifyContent="space-between" style={{ width: '80vw' }}>
                        <TextField
                            onChange={(e, v) => {
                                handleChange('info', 'country', v)
                            }}
                            inputStyle={PeopleState.editSection !== 'info' ? inputStyle : null}
                            underlineShow={PeopleState.editSection === 'info'}
                            value={PeopleState.editSection === 'info' ? PeopleState.editFormFields.info.country : PeopleState.personToDetail.person.info.country}
                            floatingLabelText="Country"
                            style={{ width: '35vw' }}
                        />
                        <TextField
                            onChange={(e, v) => {
                                handleChange('info', 'postalCode', v)
                            }}
                            inputStyle={PeopleState.editSection !== 'info' ? inputStyle : null}
                            underlineShow={PeopleState.editSection === 'info'}
                            value={PeopleState.editSection === 'info' ? PeopleState.editFormFields.info.postalCode : PeopleState.personToDetail.person.info.postalCode}
                            floatingLabelText="Postal Code"
                            style={{ width: '35vw' }}
                        />
                    </Box>
                    <Box justifyContent="space-between" style={{ width: '80vw' }}>
                        <TextField
                            onChange={(e, v) => {
                                handleChange('info', 'dob', v)
                            }}
                            inputStyle={PeopleState.editSection !== 'info' ? inputStyle : null}
                            underlineShow={PeopleState.editSection === 'info'}
                            value={PeopleState.editSection === 'info' ? PeopleState.editFormFields.info.dob : PeopleState.personToDetail.person.info.dob}
                            floatingLabelText="Date of Birth"
                            style={{ width: '35vw' }}
                        />
                        <TextField
                            onChange={(e, v) => {
                                handleChange('info', 'phoneNumber', v)
                            }}
                            inputStyle={PeopleState.editSection !== 'info' ? inputStyle : null}
                            underlineShow={PeopleState.editSection === 'info'}
                            value={PeopleState.editSection === 'info' ? PeopleState.editFormFields.info.phoneNumber : PeopleState.personToDetail.person.info.phoneNumber}
                            floatingLabelText="Phone #"
                            style={{ width: '35vw' }}
                        />
                    </Box>
                </Center>
            </Paper>
        </div>
    )
}

const renderStatusSection = () => {
    return (
        <div>
            <Subheader>
                <Center justifyContent="space-between">
                    <span>Status</span>
                    <IconButton>
                        <Edit />
                    </IconButton>
                </Center>
            </Subheader>
            <Paper>
                <Box justifyContent="space-around">
                    <TextField
                        inputStyle={inputStyle}
                        underlineShow={false}
                        floatingLabelText="Reintegration/Living Status"
                        style={{ width: '35vw' }}
                        value={PeopleState.personToDetail.person.status.reintegration}
                    />
                    <TextField inputStyle={inputStyle} underlineShow={false} floatingLabelText="Education Level" value={PeopleState.personToDetail.person.status.education} style={{ width: '35vw' }} />
                </Box>
                <Box justifyContent="space-around">
                    <TextField inputStyle={inputStyle} underlineShow={false} floatingLabelText="HIV Status" value={PeopleState.personToDetail.person.status.health} style={{ width: '35vw' }} />
                </Box>
            </Paper>
        </div>
    )
}
