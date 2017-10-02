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

let inputStyle = { color: 'transparent', textShadow: '0 0 0 black' }

const PersonDetail = ({ height }) => {
    return (
        <ReactCSSTransitionGroup transitionName="example">
            {PeopleState.showDetail ? (
                <div className="panel" style={{ height: height }}>
                    <Subheader>Basic Info</Subheader>
                    <Paper>
                        <Center column>
                            <Box justifyContent="space-between" style={{ width: '80vw' }}>
                                <TextField
                                    underlineShow={false}
                                    value={PeopleState.personToDetail.person.info.firstName}
                                    floatingLabelText="First Name"
                                    style={{ width: '35vw' }}
                                    inputStyle={inputStyle}
                                />
                                <TextField
                                    underlineShow={false}
                                    value={PeopleState.personToDetail.person.info.lastName}
                                    floatingLabelText="Last Name"
                                    style={{ width: '35vw' }}
                                    inputStyle={inputStyle}
                                />
                            </Box>
                            <TextField inputStyle={inputStyle} underlineShow={false} value={PeopleState.personToDetail.person.info.address} floatingLabelText="Address" style={{ width: '80vw' }} />
                            <TextField inputStyle={inputStyle} underlineShow={false} value={PeopleState.personToDetail.person.info.address2} floatingLabelText="Address 2" style={{ width: '80vw' }} />
                            <Box justifyContent="space-between" style={{ width: '80vw' }}>
                                <TextField inputStyle={inputStyle} underlineShow={false} value={PeopleState.personToDetail.person.info.city} floatingLabelText="City" style={{ width: '35vw' }} />
                                <TextField inputStyle={inputStyle} underlineShow={false} value={PeopleState.personToDetail.person.info.state} floatingLabelText="State" style={{ width: '35vw' }} />
                            </Box>
                            <Box justifyContent="space-between" style={{ width: '80vw' }}>
                                <TextField inputStyle={inputStyle} underlineShow={false} value={PeopleState.personToDetail.person.info.country} floatingLabelText="Country" style={{ width: '35vw' }} />
                                <TextField
                                    inputStyle={inputStyle}
                                    underlineShow={false}
                                    value={PeopleState.personToDetail.person.info.postalCode}
                                    floatingLabelText="Postal Code"
                                    style={{ width: '35vw' }}
                                />
                            </Box>
                            <Box justifyContent="space-between" style={{ width: '80vw' }}>
                                <TextField
                                    inputStyle={inputStyle}
                                    underlineShow={false}
                                    value={PeopleState.personToDetail.person.info.dob}
                                    floatingLabelText="Date of Birth"
                                    style={{ width: '35vw' }}
                                />
                                <TextField
                                    inputStyle={inputStyle}
                                    underlineShow={false}
                                    value={PeopleState.personToDetail.person.info.phoneNumber}
                                    floatingLabelText="Phone #"
                                    style={{ width: '35vw' }}
                                />
                            </Box>
                        </Center>
                    </Paper>
                    <Subheader>Status</Subheader>
                    <Paper>
                        <Box justifyContent="space-around">
                            <TextField
                                inputStyle={inputStyle}
                                underlineShow={false}
                                floatingLabelText="Reintegration/Living Status"
                                style={{ width: '35vw' }}
                                value={PeopleState.personToDetail.person.status.reintegration}
                            />
                            <TextField
                                inputStyle={inputStyle}
                                underlineShow={false}
                                floatingLabelText="Education Level"
                                value={PeopleState.personToDetail.person.status.education}
                                style={{ width: '35vw' }}
                            />
                        </Box>
                        <Box justifyContent="space-around">
                            <TextField inputStyle={inputStyle} underlineShow={false} floatingLabelText="HIV Status" value={PeopleState.personToDetail.person.status.health} style={{ width: '35vw' }} />
                        </Box>
                    </Paper>
                </div>
            ) : null}
        </ReactCSSTransitionGroup>
    )
}

export default observer(PersonDetail)
