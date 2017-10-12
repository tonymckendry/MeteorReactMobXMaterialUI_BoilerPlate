import React from 'react'
import { Page, Center, VBox } from 'react-layout-components'
import { observer } from 'mobx-react'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import { theme } from '../theme/theme'
import UserState from '../../state/singletons/users'

const Login = () => {
    return (
        <Page style={{ background: 'linear-gradient(135deg, ' + theme.palette.primary1Color + ', ' + theme.palette.accent1Color + ')' }}>
            <Center column height="100%">
                <form onSubmit={handleLogin}>
                    <VBox>
                        <TextField onChange={handleUsernameChange} floatingLabelText="Username/Email" floatingLabelStyle={{ color: 'rgba(255,255,255,.9)' }} />
                        <TextField onChange={handlePasswordChange} floatingLabelText="Password" floatingLabelStyle={{ color: 'rgba(255,255,255,.9)' }} type="password" />
                        <FlatButton label="Sign in" labelStyle={{ color: 'white' }} type="submit" />
                    </VBox>
                </form>
            </Center>
        </Page>
    )
}

export default observer(Login)

const handleUsernameChange = e => {
    UserState.setUsername(e.target.value.trim())
}

const handlePasswordChange = e => {
    UserState.setPassword(e.target.value)
}

const handleLogin = e => {
    console.log('submit!')
    e.preventDefault()
    UserState.auth()
}
