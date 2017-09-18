import React from 'react'
import { Page, Center } from 'react-layout-components'
import { observer } from 'mobx-react'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import { PersonaTheme } from '../theme/theme'

const Login = () => {
    return (
        <Page style={{ background: 'linear-gradient(135deg, ' + PersonaTheme.palette.primary1Color + ', ' + PersonaTheme.palette.accent1Color + ')' }}>
            <Center column height="100%">
                <TextField floatingLabelText="Username/Email" floatingLabelStyle={{ color: 'rgba(255,255,255,.9)' }} />
                <TextField floatingLabelText="Password" floatingLabelStyle={{ color: 'rgba(255,255,255,.9)' }} />
                <FlatButton label="Sign in" labelStyle={{ color: 'white' }} />
            </Center>
        </Page>
    )
}

export default observer(Login)
