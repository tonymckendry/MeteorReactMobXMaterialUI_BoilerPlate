import React from 'react'
import { observer } from 'mobx-react'
import { Page } from 'react-layout-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const PeopleList = ({ height }) => {
    return (
        <Page style={{ height: height }}>
            <FloatingActionButton style={{ position: 'absolute', bottom: 20, right: 20 }}>
                <ContentAdd />
            </FloatingActionButton>
        </Page>
    )
}

PeopleList.propTypes = {
    height: React.PropTypes.number.isRequired
}

export default observer(PeopleList)
