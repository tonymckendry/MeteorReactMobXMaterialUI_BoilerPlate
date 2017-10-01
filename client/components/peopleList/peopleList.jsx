import React from 'react'
import { observer } from 'mobx-react'
import { Page, Box, VBox, Center } from 'react-layout-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Subheader from 'material-ui/Subheader'
import ContentAdd from 'material-ui/svg-icons/content/add'

import FlatButton from 'material-ui/FlatButton'
import Close from 'material-ui/svg-icons/navigation/close'
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import { List, ListItem } from 'material-ui/List'

import { PeopleState } from '../../directory/singletons'
import { PersonaTheme } from '../theme/theme'
import PersonForm from './personForm'
import PersonDetail from './personDetail'

import PersonStatus from '../../constants/status'

const PeopleList = ({ height }) => {
    return (
        <Page style={{ marginTop: 64, height: height - 64 }}>
            <PersonForm height={height} />
            <PersonDetail height={height} />
            <List>
                {PeopleState.allPeople.map(p => {
                    console.log(p)
                    return (
                        <div>
                            <ListItem
                                onClick={() => PeopleState.setPersonToDetail(p)}
                                rightIcon={<KeyboardArrowRight />}
                                leftAvatar={
                                    <Avatar>
                                        {p.person.info.firstName[0]}
                                        {p.person.info.lastName[0]}
                                    </Avatar>
                                }
                                primaryText={p.person.info.firstName + ' ' + p.person.info.lastName}
                                secondaryText={p.person.status.reintegration}
                            />
                            <Divider />
                        </div>
                    )
                })}
            </List>
            <FloatingActionButton
                onClick={() => {
                    PeopleState.setPanelOpen(true)
                }}
                style={{ position: 'absolute', bottom: 20, right: 20 }}>
                <ContentAdd />
            </FloatingActionButton>
        </Page>
    )
}

PeopleList.propTypes = {
    height: React.PropTypes.number.isRequired
}

export default observer(PeopleList)
