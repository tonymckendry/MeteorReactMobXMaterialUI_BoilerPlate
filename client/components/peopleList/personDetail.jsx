import React from 'react'
import Subheader from 'material-ui/Subheader'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import Dialog from 'material-ui/Dialog'
import { Center, Box, VBox } from 'react-layout-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { observer } from 'mobx-react'
import Edit from 'material-ui/svg-icons/editor/mode-edit'
import Add from 'material-ui/svg-icons/content/add'

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
    return (
        <ReactCSSTransitionGroup transitionName="example">
            {PeopleState.showDetail ? (
                <div className="panel" style={{ height: height }}>
                    {renderInfoSection()}
                    {renderStatusSection()}
                    {renderCommentSection()}
                    {renderNewComment()}
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
    let content
    if (PeopleState.editSection === 'status') {
        content = (
            <div>
                <Box justifyContent="space-around">
                    <SelectField
                        floatingLabelText="Reintegration/Living Status"
                        style={{ width: '35vw' }}
                        value={PeopleState.editFormFields.status.reintegration}
                        onChange={(event, key, payload) => {
                            handleChange('status', 'reintegration', payload)
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
                        value={PeopleState.editFormFields.status.education}
                        style={{ width: '35vw' }}
                        onChange={(event, key, payload) => {
                            handleChange('status', 'education', payload)
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
                        value={PeopleState.editFormFields.status.health}
                        style={{ width: '35vw' }}
                        onChange={(event, key, payload) => {
                            handleChange('status', 'health', payload)
                        }}>
                        <MenuItem primaryText={PersonStatus.health.HIV.positive} value={PersonStatus.health.HIV.positive} />
                        <MenuItem primaryText={PersonStatus.health.HIV.negative} value={PersonStatus.health.HIV.negative} />
                        <MenuItem primaryText={PersonStatus.health.HIV.unknown} value={PersonStatus.health.HIV.unknown} />
                    </SelectField>
                </Box>
            </div>
        )
    } else {
        content = (
            <div>
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
            </div>
        )
    }
    return (
        <div>
            <Subheader>
                <Center justifyContent="space-between">
                    <span>Status</span>
                    {renderIconButton('status')}
                </Center>
            </Subheader>
            <Paper>{content}</Paper>
        </div>
    )
}

const renderCommentSection = () => {
    return (
        <div>
            <Subheader>
                <Center justifyContent="space-between">
                    <span>Comments</span>
                    <FlatButton label="New" icon={<Add />} onClick={PeopleState.createNewComment} />
                </Center>
            </Subheader>
            <Paper>
                {PeopleState.personToDetail.person.comments.map(c => {
                    return (
                        <VBox style={{ padding: 20 }}>
                            <Box justifyContent="space-between">
                                <span>Person Name</span>
                                <span>Date</span>
                            </Box>
                            <p>{c.comment}</p>
                        </VBox>
                    )
                })}
            </Paper>
        </div>
    )
}

const renderNewComment = () => {
    return (
        <Dialog
            open={PeopleState.showCreateComment}
            title="New Comment"
            modal
            actions={
                <Box justifyContent="flex-end">
                    <FlatButton label="cancel" onClick={PeopleState.cancelComment} /> <FlatButton primary label="submit" onClick={PeopleState.submitComment} />
                </Box>
            }>
            <TextField
                style={{ width: '100%' }}
                multiLine
                onChange={(e, v) => {
                    PeopleState.setCommentText(v)
                }}
            />
        </Dialog>
    )
}
