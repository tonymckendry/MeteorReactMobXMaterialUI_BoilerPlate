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
                                    <TextField floatingLabelText="First Name" style={{ width: '35vw' }} />
                                    <TextField floatingLabelText="Last Name" style={{ width: '35vw' }} />
                                </Box>
                                <TextField floatingLabelText="Address" style={{ width: '80vw' }} />
                                <Box justifyContent="space-between" style={{ width: '80vw' }}>
                                    <TextField floatingLabelText="Date of Birth" style={{ width: '35vw' }} />
                                    <TextField floatingLabelText="Phone #" style={{ width: '35vw' }} />
                                </Box>
                            </Center>
                        </Paper>
                        <Subheader>Status</Subheader>
                        <Paper>
                            <Box justifyContent="space-around">
                                <SelectField floatingLabelText="Reintegration/Living Status" style={{ width: '35vw' }}>
                                    <MenuItem primaryText="Street" value="street" />
                                    <MenuItem primaryText="Masana" value="masana" />
                                    <MenuItem primaryText="Family Home" value="family home" />
                                    <MenuItem primaryText="Jail" value="jail" />
                                    <MenuItem primaryText="Deceased" value="deceased" />
                                </SelectField>
                                <SelectField floatingLabelText="Education Level" style={{ width: '35vw' }}>
                                    <MenuItem primaryText="None" value="none" />
                                    <MenuItem primaryText="K-3rd Grade" value="k-3" />
                                    <MenuItem primaryText="4th-7th Grade" value="4-7" />
                                    <MenuItem primaryText="8th-12th Grade" value="8-12" />
                                </SelectField>
                            </Box>
                        </Paper>
                        <Center style={{ marginTop: 10 }}>
                            <FlatButton label="Submit" backgroundColor={PersonaTheme.palette.accent2Color} labelStyle={{ color: 'white' }} />
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
