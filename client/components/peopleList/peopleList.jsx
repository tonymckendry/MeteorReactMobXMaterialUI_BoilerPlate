import React from 'react'
import { observer } from 'mobx-react'

import { theme } from '../theme/theme'

const PeopleList = ({ height }) => {
    return <h1>People List Component</h1>
}

PeopleList.propTypes = {
    height: React.PropTypes.number.isRequired
}

export default observer(PeopleList)
